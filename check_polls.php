<?php

require __DIR__.'/vendor/autoload.php';

$app = require_once __DIR__.'/bootstrap/app.php';
$app->make('Illuminate\Contracts\Console\Kernel')->bootstrap();

use App\Models\Poll;
use App\Models\Option;

echo "=== POLLS AKTIF ===\n\n";

$activePolls = Poll::where('status', 'active')->with('options')->get();

foreach ($activePolls as $poll) {
    echo "ID: {$poll->id}\n";
    echo "Judul: {$poll->title}\n";
    echo "Deskripsi: {$poll->description}\n";
    echo "Status: {$poll->status}\n";
    echo "Berakhir: {$poll->ends_at->format('d M Y H:i')}\n";
    echo "Opsi:\n";
    foreach ($poll->options as $option) {
        echo "  - {$option->option_text}\n";
    }
    echo "\n";
}

echo "Total Polls Aktif: " . $activePolls->count() . "\n";
echo "Total Semua Polls: " . Poll::count() . "\n";
