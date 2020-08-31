<?php

namespace App\Http\Controllers\Api\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\User;
use Illuminate\Support\Facades\Hash;
use Carbon\Carbon;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

class UsersController extends Controller
{
    public function createUser(Request $request) {

        if ($request['role'] == 'member') {
            $this->validate($request, [
                'first_name' => 'required',
                'last_name' => 'required',
                'email' => 'required|email|unique:users',
                'role' => 'required'
            ]);
        } else {
            $this->validate($request, [
                'first_name' => 'required',
                'last_name' => 'required',
                'email' => 'required|email|unique:users',
                'password' => 'required|confirmed|min:8',
                'password_confirmation' => 'required|min:8',
                'role' => 'required'
            ]);
        }

        if($request->hasFile('foto_user')){
            $resource = $request->file('foto_user');
            $name = Carbon::now()->timestamp."_".$resource->getClientOriginalName();
            $userId = Auth::user()->id;
            $url = "/storage/foto_user/".$userId."/".$name;
            $resource->move(\base_path() ."/public/storage/foto_user/".$userId, $name);
            
            if ($request['role'] == 'admin') {

                $user = User::create([
                    'foto_user' => $url,
                    'first_name' => $request['first_name'],
                    'last_name' => $request['last_name'],
                    'email' => $request['email'],
                    'email_verified_at' => Carbon::now()->timestamp,
                    'password' => Hash::make($request['password']),
                    'id_prefix' => '1'
                ])->assignRole('admin');
    
            } else if ($request['role'] == 'pustakawan'){
    
                $user = User::create([
                    'foto_user' => $url,
                    'first_name' => $request['first_name'],
                    'last_name' => $request['last_name'],
                    'email' => $request['email'],
                    'email_verified_at' => Carbon::now()->timestamp,
                    'nis' => $request['nis'],
                    'nuptk' => $request['nuptk'],
                    'alamat' => $request['alamat'],
                    'no_telp' => $request['no_telp'],
                    'password' => Hash::make($request['password']),
                    'id_prefix' => '2'
                ])->assignRole('pustakawan');
    
            } else {
    
                $user = User::create([
                    'foto_user' => $url,
                    'first_name' => $request['first_name'],
                    'last_name' => $request['last_name'],
                    'email' => $request['email'],
                    'email_verified_at' => Carbon::now()->timestamp,
                    'nis' => $request['nis'],
                    'nuptk' => $request['nuptk'],
                    'alamat' => $request['alamat'],
                    'no_telp' => $request['no_telp'],
                    'id_prefix' => '3'
                ])->assignRole('member');
    
            }
            
            return response()->json([
              'status' => 'success',
              'message' => 'User telah berhasil ditambahkan. Sekarang konfirmasi email user tersebut, dengan mengklik email aktivasi yang telah di kirim.'
            ], 200);

          } else {

            if ($request['role'] == 'admin') {

                $user = User::create([
                    'first_name' => $request['first_name'],
                    'last_name' => $request['last_name'],
                    'email' => $request['email'],
                    'email_verified_at' => Carbon::now()->timestamp,
                    'password' => Hash::make($request['password']),
                    'id_prefix' => '1'
                ])->assignRole('admin');
    
            } else if ($request['role'] == 'pustakawan'){
    
                $user = User::create([
                    'first_name' => $request['first_name'],
                    'last_name' => $request['last_name'],
                    'email' => $request['email'],
                    'email_verified_at' => Carbon::now()->timestamp,
                    'nis' => $request['nis'],
                    'nuptk' => $request['nuptk'],
                    'alamat' => $request['alamat'],
                    'no_telp' => $request['no_telp'],
                    'password' => Hash::make($request['password']),
                    'id_prefix' => '2'
                ])->assignRole('pustakawan');
    
            } else {
    
                $user = User::create([
                    'first_name' => $request['first_name'],
                    'last_name' => $request['last_name'],
                    'email' => $request['email'],
                    'email_verified_at' => Carbon::now()->timestamp,
                    'nis' => $request['nis'],
                    'nuptk' => $request['nuptk'],
                    'alamat' => $request['alamat'],
                    'no_telp' => $request['no_telp'],
                    'id_prefix' => '3'
                ])->assignRole('member');
    
            }

            return response()->json([
                'status' => 'success',
                'message' => 'User telah berhasil ditambahkan, tanpa foto user. Sekarang konfirmasi email user tersebut, dengan mengklik email aktivasi yang telah di kirim'
            ], 200);

        }
    }
}
