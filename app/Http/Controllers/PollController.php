<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Poll;
use Inertia\Response;
use Inertia\Inertia;

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
}
