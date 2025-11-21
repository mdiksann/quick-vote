<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\HasMany;
use App\Models\Option;
use App\Models\Vote;
use App\Models\User;
use App\Models\Subscription;

class Poll extends Model
{
    use HasFactory;
    protected $fillable = [
        'user_id',
        'title',
        'description',
        'status',
        'ends_at',
    ];

    protected $casts = [
        'ends_at' => 'datetime',
    ];

    // Relasi ke User (Pembuat Poll)
    public function creator(): BelongsTo
    {
        return $this->belongsTo(User::class, 'user_id');
    }

    // Relasi ke Options
    public function options(): HasMany
    {
        return $this->hasMany(Option::class);
    }

    // Relasi ke Votes
    public function votes(): HasMany
    {
        return $this->hasMany(Vote::class);
    }

    // Relasi ke Subscriptions
    public function subscriptions(): HasMany
    {
        return $this->hasMany(Subscription::class);
    }
}
