<?php

namespace App\Http\Controllers\Api\Pustakawan;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Peminjaman;
use Carbon\Carbon;
use Illuminate\Support\Facades\Auth;
use App\Buku;
use Illuminate\Support\Facades\DB;

class PeminjamanController extends Controller
{
    public function createPeminjamanBuku(Request $request) {
        $data = $request->all();

        $tanggal_pinjam = Carbon::today()->toDateString();
        Carbon::setWeekendDays([ Carbon::SUNDAY, Carbon::SATURDAY ]);
        $lama_hari = 5;
        $tanggal_harus_kembali = Carbon::parse($tanggal_pinjam)->addWeekdays($lama_hari)->toDateString();
        $id_pustakawan = Auth::user()->id;
        
        foreach ($data as $item) {
            Peminjaman::create([
                'id_buku' => $item['id_buku'],
                'id_member' => $item['id_member'],
                'id_pustakawan' => $id_pustakawan,
                'jumlah_buku' => $item['jumlah_buku'],
                'tanggal_pinjam' => $tanggal_pinjam,
                'tanggal_harus_kembali' => $tanggal_harus_kembali,
                'id_prefix' => '5'
            ]);

            $stok_buku = Buku::where('id', $item['id_buku'])->first();
            $stok_buku->stok_buku = $stok_buku->stok_buku - $item['jumlah_buku'];
            $stok_buku->save();
    
        }

        return response()->json([
            'status' => 'success',
            'message' => 'Berhasil Pinjam Buku',
        ], 200);
    }


    public function getDaftarPeminjaman() {
        $data = DB::table('peminjaman')
                    ->join('buku', 'buku.id', '=', 'peminjaman.id_buku')
                    ->join('users', 'users.id', '=', 'peminjaman.id_member')
                    ->select(
                        'peminjaman.*', 
                        'buku.judul_buku', 
                        'buku.pengarang_buku', 
                        'users.first_name', 
                        'users.last_name', 
                    )
                    ->get();

        return response()->json([
            'status' => 'success',
            'message' => 'Berhasil Mendapatkan Data Peminjaman',
            'data' => $data
        ], 200);
    }
}
