<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Prefix extends Model
{
    protected $table = "prefix";

    protected $fillable = [
        'prefix',
        'deskripsi'
    ];

    public function user()
    {
        return $this->hasMany('App\User');
    }


    public function buku()
    {
        return $this->hasMany('App\Buku');
    }

    public function peminjaman()
    {
        return $this->hasMany('App\Peminjaman');
    }
}
