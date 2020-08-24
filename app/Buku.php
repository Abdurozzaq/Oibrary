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
        'lokasi_rak',
        'id_prefix',
        'foto_buku',
        'kode_buku_full'
    ];

    public function prefix()
    {
        return $this->belongsTo('App\Prefix', 'id_prefix');
    }

    public static function boot() {
        parent::boot();

        static::creating(function($model) {
            $model->kode_buku = Buku::where('id_prefix', $model->id_prefix)->max('kode_buku') + 1;
            $model->kode_buku_full = $model->prefix->prefix . str_pad($model->kode_buku, 5, 0, STR_PAD_LEFT);
        });
    }

}
