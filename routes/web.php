<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\PollController;
use Inertia\Inertia;

Route::get('/home', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});


Route::get('/', [PollController::class, 'index'])->name('polls.index');

// Rute Dashboard (Hanya untuk User Terautentikasi dan Terverifikasi)
Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('/dashboard', fn() => Inertia::render('Dashboard'))->name('dashboard');
});

// Rute Publik untuk Detail Poll
Route::get('/polls/{poll}', [PollController::class, 'show'])->name('polls.show');

// Rute Voting (Hanya User yang Login)
Route::post('/polls/{poll}/vote', [PollController::class, 'vote'])
    ->middleware('auth') // Hanya user terautentikasi yang boleh vote
    ->name('polls.vote');


require __DIR__.'/auth.php';
