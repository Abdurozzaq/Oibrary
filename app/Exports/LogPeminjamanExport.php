<?php

namespace App\Exports;

use App\Peminjaman;
use Maatwebsite\Excel\Concerns\FromCollection;
use Illuminate\Support\Facades\DB;

class LogPeminjamanExport implements FromCollection
{
    /**
    * @return \Illuminate\Support\Collection
    */
    public function collection()
    {
        return DB::table('peminjaman')
                    ->join('buku', 'buku.id', '=', 'peminjaman.id_buku')
                    ->join('users', 'users.id', '=', 'peminjaman.id_member')
                    ->select(
                        'buku.kode_buku_full',
                        'buku.judul_buku', 
                        'peminjaman.jumlah_buku',
                        'peminjaman.kode_peminjaman_full', 
                        DB::raw('DATE_FORMAT(peminjaman.tanggal_pinjam, "%d-%m-%Y") as tanggal_pinjam'),
                        'users.kode_user_full',
                        DB::raw('CONCAT(users.first_name, " ", users.last_name) AS full_name')
                    )
                    ->get();
    }
}
