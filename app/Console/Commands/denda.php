<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use App\Peminjaman;
use Carbon\Carbon;

class denda extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'denda:cron';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Command description';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return mixed
     */
    public function handle()
    {
        \Log::info("Menjalankan Command denda:cron");
     
        $pengembalian = Peminjaman::all();

        $tglSekarang = Carbon::now();
        Carbon::setWeekendDays([ Carbon::SUNDAY, Carbon::SATURDAY ]);

        foreach($pengembalian as $item) {
            $tglKembali = Carbon::parse($item['tanggal_harus_kembali']);

            $selisih = $tglSekarang->diffInWeekdays($tglKembali) - 1;

            if($selisih > 0) {
                $item['denda'] = $selisih * 500;
                $item['terlambat'] = $selisih;
                $item->save();
            }
        }
      
        $this->info('denda:cron Cummand Run successfully!');
    }
}
