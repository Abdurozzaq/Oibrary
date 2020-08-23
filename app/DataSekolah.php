<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class DataSekolah extends Model
{
    protected $table = "data_sekolah";

    protected $fillable = [
        'nama_sekolah',
        'npsn_sekolah',
        'alamat_sekolah',
        'status',
        'bentuk_pendidikan',
    ];
}
