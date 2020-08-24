<?php

namespace App\Http\Controllers\Api\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\User;
use Illuminate\Support\Facades\Hash;

class UsersController extends Controller
{
    public function createUser(Request $request) {

        $this->validate($request, [
            'first_name' => 'required',
            'last_name' => 'required',
            'email' => 'required|email|unique:users',
            'password' => 'required|confirmed|min:8',
            'password_confirmation' => 'required|min:8',
            'role' => 'required'
        ]);

       

        if ($request['role'] == 'admin') {

            $user = User::create([
                'first_name' => $request['first_name'],
                'last_name' => $request['last_name'],
                'email' => $request['email'],
                'password' => Hash::make($request['password']),
                'id_prefix' => '1'
            ])->assignRole('admin');

        } else if ($request['role'] == 'pustakawan'){

            $user = User::create([
                'first_name' => $request['first_name'],
                'last_name' => $request['last_name'],
                'email' => $request['email'],
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
                'nis' => $request['nis'],
                'nuptk' => $request['nuptk'],
                'alamat' => $request['alamat'],
                'no_telp' => $request['no_telp'],
                'password' => Hash::make($request['password']),
                'id_prefix' => '3'
            ])->assignRole('member');

        }

        $user->sendApiEmailVerificationNotification();

        return response()->json([
            'status' => 'success',
            'message' => 'Please confirm the new user account email address by clicking on verify user button sent to you on his email'
        ], 200);
    }
}
