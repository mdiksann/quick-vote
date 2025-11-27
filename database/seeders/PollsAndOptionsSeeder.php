<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class PollsAndOptionsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */ 
public function run(): void
    {
        // Pastikan ada user dengan ID 1. Jika tidak, ganti 1 dengan User ID yang valid.
        $userId = 1; 

        // 1. Buat Poll Aktif
        $activePoll = Poll::create([
            'user_id' => $userId,
            'title' => 'Polling Pilihan Bahasa Pemrograman Favorit',
            'description' => 'Pilih bahasa pemrograman yang paling sering Anda gunakan dan sukai.',
            'status' => 'active',
            'ends_at' => now()->addYear(), // Berakhir setahun dari sekarang
        ]);

        // 2. Buat Opsi untuk Poll Aktif
        $activePoll->options()->createMany([
            ['option_text' => 'PHP (Laravel)'],
            ['option_text' => 'JavaScript (Node.js/React)'],
            ['option_text' => 'Python (Django/Flask)'],
            ['option_text' => 'Go'],
        ]);

        // 3. Buat Poll Draft (Tambahan)
        Poll::create([
            'user_id' => $userId,
            'title' => 'Polling Judul Film Terbaik 2025',
            'description' => 'Polling ini masih dalam konsep dan belum siap tayang.',
            'status' => 'draft',
            'ends_at' => null,
        ]);
    }
}
