<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Peminjaman extends Model
{
    protected $table = "peminjaman";

    protected $fillable = [
        'kode_peminjaman',
        'kode_peminjaman_full',
        'tanggal_pinjam',
        'tanggal_harus_kembali',
        'tanggal_pengembalian',
        'denda',
        'id_buku',
        'id_member',
        'id_pustakawan',
        'id_prefix',
        'jumlah_buku',
    ];

    public function prefix()
    {
        return $this->belongsTo('App\Prefix', 'id_prefix');
    }

    public static function boot() {
        parent::boot();

        static::creating(function($model) {
            $model->kode_peminjaman = Peminjaman::where('id_prefix', $model->id_prefix)->max('kode_peminjaman') + 1;
            $model->kode_peminjaman_full = $model->prefix->prefix . str_pad($model->kode_peminjaman, 5, 0, STR_PAD_LEFT);
        });
    }
}
