<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\HasMany;
use App\Models\Poll;
use App\Models\Vote;

class Option extends Model
{
    use HasFactory;

    protected $fillable = [
        'poll_id',
        'option_text',
        'order',
    ];

    public function poll(): BelongsTo
    {
        return $this->belongsTo(Poll::class);
    }

    public function votes(): HasMany
    {
        return $this->hasMany(Vote::class);
    }

    public function countVotes(): int
    {
        return $this->votes()->count();
    }
}
