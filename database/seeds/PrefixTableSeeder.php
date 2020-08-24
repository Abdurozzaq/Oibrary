<?php

use Illuminate\Database\Seeder;
use App\Prefix;

class PrefixTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {

        Prefix::create([
            'id' => '1',
            'prefix' => 'A',
            'deskripsi' => 'Prefix Admin'
        ]);

        Prefix::create([
            'id' => '2',
            'prefix' => 'P',
            'deskripsi' => 'Prefix Pusatakawan'
        ]);

        Prefix::create([
            'id' => '3',
            'prefix' => 'M',
            'deskripsi' => 'Prefix Member'
        ]);

        Prefix::create([
            'id' => '4',
            'prefix' => 'B',
            'deskripsi' => 'Prefix Buku'
        ]);

        Prefix::create([
            'id' => '5',
            'prefix' => 'PJ',
            'deskripsi' => 'Prefix Peminjaman'
        ]);
    }
}
