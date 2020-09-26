<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class ProfileSettingsController extends Controller
{
    public function editIdentity(Request $request) {

        $this->validate($request, [
            'first_name' => 'required',
            'last_name' => 'required',
            'email' => 'required|email'
        ]);

        if($request->hasFile('foto_user')){
            $resource = $request->file('foto_user');
            $name = Carbon::now()->timestamp."_".$resource->getClientOriginalName();
            $userId = Auth::user()->id;
            $url = "/storage/foto_user/".$userId."/".$name;
            $resource->move(\base_path() ."/public/storage/foto_user/".$userId, $name);
                
            $user = User::findOrFail(Auth::user()->id);
            $user->foto_user = $url;
            $user->first_name = $request['first_name'];
            $user->last_name = $request['last_name'];
            $user->email = $request['email'];
            $user->alamat = $request['alamat'];
            $user->no_telp = $request['no_telp'];
            $user->save();
            
            return response()->json([
              'status' => 'success',
              'message' => 'Identitas Anda Telah Berhasil diubah'
            ], 200);

        } else {

            $user = User::findOrFail(Auth::user()->id);
            $user->first_name = $request['first_name'];
            $user->last_name = $request['last_name'];
            $user->email = $request['email'];
            $user->alamat = $request['alamat'];
            $user->no_telp = $request['no_telp'];
            $user->save();

            return response()->json([
                'status' => 'success',
                'message' => 'Identitas Anda telah berhasil diubah'
            ], 200);
    
        }
        
    }

    public function changePassword(Request $request) {

        $this->validate($request, [
            'password' => 'required|confirmed|min:8',
            'password_confirmation' => 'required|min:8',
        ]);

        $user = User::findOrFail(Auth::user()->id);
        $user->password = Hash::make($request['password']);
        $user->save();

        return response()->json([
            'status' => 'success',
            'message' => 'Password Changed Successfully',
        ], 200);
        
    }
}
