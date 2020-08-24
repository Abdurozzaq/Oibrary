<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateBukuTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('buku', function (Blueprint $table) {
            $table->id();
            $table->string('kode_buku');
            $table->string('kode_buku_full')->nullable();
            $table->string('id_prefix');
            $table->string('foto_buku')->nullable();
            $table->string('judul_buku');
            $table->string('pengarang_buku');
            $table->string('penerbit_buku');
            $table->string('tahun_terbit_buku');
            $table->string('jumlah_halaman_buku');
            $table->string('stok_buku');
            $table->string('nama_rak');
            $table->string('lokasi_rak');
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
        Schema::dropIfExists('bukus');
    }
}
