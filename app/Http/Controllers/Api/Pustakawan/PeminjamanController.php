<?php

namespace App\Http\Controllers\Api\Pustakawan;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Peminjaman;
use Carbon\Carbon;
use Illuminate\Support\Facades\Auth;
use App\Buku;
use Illuminate\Support\Facades\DB;
use App\Exports\LogPeminjamanExport;
use App\Exports\LogPengembalianExport;
use Maatwebsite\Excel\Facades\Excel;

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


    public function getDaftarSirkulasi() {
        $data = DB::table('peminjaman')
                    ->where('tanggal_pengembalian', null)
                    ->join('buku', 'buku.id', '=', 'peminjaman.id_buku')
                    ->join('users', 'users.id', '=', 'peminjaman.id_member')
                    ->select(
                        'peminjaman.*', 
                        'buku.judul_buku', 
                        'buku.pengarang_buku', 
                        'users.kode_user_full',
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


    public function perpanjangBuku($id) {
        $peminjaman = Peminjaman::findOrFail($id);

        $tanggal_perpanjang = Carbon::today()->toDateString();
        Carbon::setWeekendDays([ Carbon::SUNDAY, Carbon::SATURDAY ]);
        $lama_hari = 5;
        $tanggal_harus_kembali = Carbon::parse($tanggal_perpanjang)->addWeekdays($lama_hari)->toDateString();

        $peminjaman->tanggal_pinjam = $tanggal_perpanjang;
        $peminjaman->tanggal_harus_kembali = $tanggal_harus_kembali;
        $peminjaman->denda = null;
        $peminjaman->terlambat = null;
        $peminjaman->save();

        return response()->json([
            'status' => 'success',
            'message' => 'Berhasil Perpanjang Buku',
        ], 200);

    }


    public function kembalikanBuku($id) {

        /**
         * Input Tanggal Kembali
         */
        // Mendapatkan record peminjaman
        $peminjaman = Peminjaman::findOrFail($id);
        
        // Mendapatkan Tanggal Sekarang
        $tgl_sekarang = Carbon::today()->toDateString();

        // Memasukan tanggal kembali, yaitu tanggal sekarang.
        $peminjaman->tanggal_pengembalian = $tgl_sekarang;
        $peminjaman->save();

        /**
         * Sekarang Kembalikan Stok Buku
         */
        // Mendapatkan id buku
        $id_buku = $peminjaman['id_buku'];
        // Mendapatkan jumlah Buku
        $jumlah_buku = $peminjaman['jumlah_buku'];

        // Mengembalikan Stok Buku
        $buku = Buku::findOrFail($id_buku);
        $buku->stok_buku = $buku->stok_buku + $jumlah_buku;
        $buku->save();
        
        return response()->json([
            'status' => 'success',
            'message' => 'Berhasil Mengembalikan Buku',
        ], 200);
    }

    public function getDaftarPeminjaman() {
        $data = DB::table('peminjaman')
                    ->join('buku', 'buku.id', '=', 'peminjaman.id_buku')
                    ->join('users', 'users.id', '=', 'peminjaman.id_member')
                    ->select(
                        'buku.kode_buku_full',
                        'buku.judul_buku', 
                        'peminjaman.kode_peminjaman_full', 
                        DB::raw('DATE_FORMAT(peminjaman.tanggal_pinjam, "%d-%m-%Y") as tanggal_pinjam'),
                        'users.kode_user_full',
                        DB::raw('CONCAT(users.first_name, " ", users.last_name) AS full_name')
                    )
                    ->get();

        return response()->json([
            'status' => 'success',
            'message' => 'Berhasil Mendapatkan Data Peminjaman',
            'data' => $data
        ], 200);
    }

    public function exportLogPeminjaman()
	{
		return Excel::download(new LogPeminjamanExport, 'LogPeminjaman.xlsx');
    }
    
    public function getDaftarPengembalian() {
        $data = DB::table('peminjaman')
                    ->whereNotNull('tanggal_pengembalian')
                    ->join('buku', 'buku.id', '=', 'peminjaman.id_buku')
                    ->join('users', 'users.id', '=', 'peminjaman.id_member')
                    ->select(
                        'buku.kode_buku_full',
                        'buku.judul_buku', 
                        'peminjaman.kode_peminjaman_full', 
                        DB::raw('DATE_FORMAT(peminjaman.tanggal_pengembalian, "%d-%m-%Y") as tanggal_pengembalian'),
                        'users.kode_user_full',
                        DB::raw('CONCAT(users.first_name, " ", users.last_name) AS full_name')
                    )
                    ->get();

        return response()->json([
            'status' => 'success',
            'message' => 'Berhasil Mendapatkan Data Pengembalian',
            'data' => $data
        ], 200);
    }

    public function exportLogPengembalian()
	{
		return Excel::download(new LogPengembalianExport, 'LogPengembalian.xlsx');
    }
}
