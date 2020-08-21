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
            'first_name' =>'Admin',
            'last_name' =>'Admin',
            'email' => 'admin@gmail.com',
            'password' => Hash::make('password'),
            'email_verified_at' => $date
        ])->assignRole('admin');

        User::create([
            'first_name' =>'User',
            'last_name' =>'User',
            'email' => 'user@gmail.com',
            'password' => Hash::make('password'),
            'email_verified_at' => $date
        ])->assignRole('user');
    }
}
