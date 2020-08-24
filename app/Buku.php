<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Buku extends Model
{

    protected $table = "buku";

    protected $fillable = [
        'kode_buku',
        'judul_buku',
        'pengarang_buku',
        'penerbit_buku',
        'tahun_terbit_buku',
        'jumlah_halaman_buku',
        'stok_buku',
        'nama_rak',
        'lokasi_rak'
    ];

    public function boot() {
        parent::boot();

        static::creating(function($model) {
            $model->kode_buku = Buku::where('id_prefix', $model->id_prefix)->max('kode_buku') + 1;
        });
    }
}
