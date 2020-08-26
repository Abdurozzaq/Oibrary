<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePeminjamanTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('peminjaman', function (Blueprint $table) {
            $table->id();
            $table->string('kode_peminjaman');
            $table->string('kode_peminjaman_full')->nullable();
            $table->string('id_prefix');
            $table->string('jumlah_buku');
            $table->string('id_buku');
            $table->string('id_member');
            $table->string('id_pustakawan');
            $table->string('tanggal_pinjam');
            $table->string('tanggal_harus_kembali');
            $table->string('tanggal_pengembalian')->nullable();
            $table->string('denda')->nullable();
            $table->string('terlambat')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('peminjamen');
    }
}
