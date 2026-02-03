<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Poll;
use App\Models\User;

class PollsAndOptionsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */ 
    public function run(): void
    {
        // Buat user untuk testing jika belum ada
        $user = User::firstOrCreate(
            ['email' => 'admin@example.com'],
            [
                'name' => 'Admin User',
                'password' => bcrypt('password'),
            ]
        );

        // 1. Poll Aktif - Bahasa Pemrograman
        $poll1 = Poll::create([
            'user_id' => $user->id,
            'title' => 'Bahasa Pemrograman Favorit 2026',
            'description' => 'Pilih bahasa pemrograman yang paling sering Anda gunakan dan sukai.',
            'status' => 'active',
            'ends_at' => now()->addMonths(3), // Berakhir 3 bulan dari sekarang
        ]);

        $poll1->options()->createMany([
            ['option_text' => 'PHP (Laravel)'],
            ['option_text' => 'JavaScript (Node.js/React)'],
            ['option_text' => 'Python (Django/Flask)'],
            ['option_text' => 'Go'],
            ['option_text' => 'Java (Spring Boot)'],
        ]);

        // 2. Poll Aktif - Framework Frontend
        $poll2 = Poll::create([
            'user_id' => $user->id,
            'title' => 'Framework Frontend Terbaik',
            'description' => 'Manakah framework frontend yang paling Anda sukai untuk development?',
            'status' => 'active',
            'ends_at' => now()->addDays(30), // Berakhir 30 hari dari sekarang
        ]);

        $poll2->options()->createMany([
            ['option_text' => 'React.js'],
            ['option_text' => 'Vue.js'],
            ['option_text' => 'Angular'],
            ['option_text' => 'Svelte'],
            ['option_text' => 'Next.js'],
        ]);

        // 3. Poll Aktif - Editor/IDE
        $poll3 = Poll::create([
            'user_id' => $user->id,
            'title' => 'Code Editor Pilihan Developer',
            'description' => 'Editor atau IDE apa yang paling sering Anda gunakan?',
            'status' => 'active',
            'ends_at' => now()->addWeeks(2), // Berakhir 2 minggu dari sekarang
        ]);

        $poll3->options()->createMany([
            ['option_text' => 'Visual Studio Code'],
            ['option_text' => 'PhpStorm/WebStorm'],
            ['option_text' => 'Sublime Text'],
            ['option_text' => 'Vim/Neovim'],
            ['option_text' => 'Atom'],
        ]);

        // 4. Poll Draft - Untuk contoh
        $poll4 = Poll::create([
            'user_id' => $user->id,
            'title' => 'Database Terbaik untuk Microservices',
            'description' => 'Polling ini masih dalam konsep dan belum siap tayang.',
            'status' => 'draft',
            'ends_at' => null,
        ]);

        $poll4->options()->createMany([
            ['option_text' => 'PostgreSQL'],
            ['option_text' => 'MongoDB'],
            ['option_text' => 'MySQL'],
            ['option_text' => 'Redis'],
        ]);

        // 5. Poll Completed - Untuk contoh
        $poll5 = Poll::create([
            'user_id' => $user->id,
            'title' => 'Version Control System Favorit',
            'description' => 'Polling ini sudah berakhir.',
            'status' => 'completed',
            'ends_at' => now()->subDays(5), // Berakhir 5 hari yang lalu
        ]);

        $poll5->options()->createMany([
            ['option_text' => 'Git'],
            ['option_text' => 'SVN'],
            ['option_text' => 'Mercurial'],
        ]);
    }
}
