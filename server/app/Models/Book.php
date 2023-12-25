<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Book extends Model
{
    use HasFactory;
    protected $fillable = [
        'name',
        'author',
        'releaseYear',
        'description',
        'cover_image',
        'genre_id',
        'page_count',
        'price',
        'available',
    ];


    public function genre(){
        return $this->belongsTo(Genre::class);
    }

    public function users()
    {
        return $this->hasMany(User::class);
    }
}
