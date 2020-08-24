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
        return $this->belongsTo('App\User');
    }
}
