<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Poll;
use App\Models\Vote;
use Inertia\Response;
use Inertia\Inertia;
use Illuminate\Validation\ValidationException;
use Illuminate\Support\Facades\DB;


class PollController extends Controller
{
    public function index(): Response
    {
        $polls = Poll::with(['creator', 'options', 'votes'])
            ->where('status', 'active')
            ->orderBy('created_at', 'desc')
            ->get()
            ->map(function ($poll) {
                $poll->total_votes = $poll->votes->count();
                return $poll;
            });

        return Inertia::render('Poll/Index', [
            'polls' => $polls,
        ]);
    }

    public function show(Request $request, Poll $poll): Response
    {
        // Cek apakah user sudah login
        $user = $request->user();
        $poll->load(['options', 'votes']);
        $totalVotes = $poll->votes->count();
        $hasVoted = $user ? $user->votes()->where('poll_id', $poll->id)->exists() : false;

        // Hitung hasil voting per opsi
        $results = $poll->options->map(function ($option) use ($totalVotes) {
            $voteCount = $option->votes->count();
            $percentage = $totalVotes > 0 ? round(($voteCount / $totalVotes) * 100, 1) : 0;

            return [
                'id' => $option->id,
                'option_text' => $option->option_text,
                'vote_count' => $voteCount,
                'percentage' => $percentage,
            ];
        });

        return Inertia::render('Poll/Show', [
            'poll' => $poll->only(['id', 'title', 'description', 'status', 'ends_at']),
            'options' => $results,
            'totalVotes' => $totalVotes,
            'hasVoted' => $hasVoted,
            'canVote' => $user && !$hasVoted && $poll->status === 'active',
            'isLoggedIn' => (bool) $user,
        ]);
    }
    public function vote(Request $request, Poll $poll)
    {
        $user = $request->user();

        $request->validate([
            'option_id' => ['required', 'exists:options,id'],
        ]);

        if ($poll->status !== 'active') {
            throw ValidationException::withMessages(['poll' => 'Poll ini sudah tidak aktif atau belum dimulai.']);
        }

        if (Vote::where('user_id', $user->id)->where('poll_id', $poll->id)->exists()) {
            throw ValidationException::withMessages(['poll' => 'Anda hanya dapat memilih sekali pada Poll ini.']);
        }

        Vote::create([
            'user_id' => $user->id,
            'poll_id' => $poll->id,
            'option_id' => $request->option_id,
        ]);

        // Redirect kembali ke halaman detail poll (dengan hasil yang diperbarui)
        return redirect()->route('polls.show', $poll)->with('success', 'Terima kasih, vote Anda telah direkam!');
    }

    public function create(): Response
    {
        return Inertia::render('Poll/Create');
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'title' => ['required', 'string', 'max:255'],
            'description' => ['nullable', 'string'],
            'ends_at' => ['nullable', 'date', 'after:now'],

            'options' => ['required', 'array', 'min:2'],
            'options.*.option_text' => ['required', 'string', 'max:255'],
        ]);

        try {
            DB::transaction(function () use ($validated, $request) {

                $poll = $request->user()->polls()->create([
                    'title' => $validated['title'],
                    'description' => $validated['description'] ?? null,
                    'ends_at' => $validated['ends_at'] ?? null,
                    'status' => 'active', 
                ]);

                $optionsData = collect($validated['options'])->map(function ($option, $index) {
                    return [
                        'option_text' => $option['option_text'],
                        'order' => $index + 1, 
                    ];
                })->toArray();

                $poll->options()->createMany($optionsData);
            });
        } catch (\Exception $e) {
            return back()->with('error', 'Gagal membuat poll. Silakan coba lagi.');
        }

        return redirect()->route('polls.index')
            ->with('success', 'Poll Anda berhasil dibuat dan kini aktif!');
    }
}
