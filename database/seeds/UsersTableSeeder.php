<?php

use Illuminate\Database\Seeder;
use App\User;
use Illuminate\Support\Facades\Hash;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $date = now(); 
        User::create([
            'kode_user' => '1',
            'id_prefix' => '1',
            'first_name' =>'Admin',
            'last_name' =>'Admin',
            'email' => 'admin@gmail.com',
            'password' => Hash::make('password'),
            'email_verified_at' => $date
        ])->assignRole('admin');

        User::create([
            'kode_user' => '1',
            'id_prefix' => '2',
            'first_name' =>'Pustakawan',
            'last_name' =>'Pustakawan',
            'email' => 'pustakawan@gmail.com',
            'password' => Hash::make('password'),
            'email_verified_at' => $date
        ])->assignRole('pustakawan');

        User::create([
            'kode_user' => '1',
            'id_prefix' => '3',
            'first_name' =>'Member',
            'last_name' =>'Member',
            'email' => 'member@gmail.com',
            'password' => Hash::make('password'),
            'email_verified_at' => $date
        ])->assignRole('member');

       
    }
}
