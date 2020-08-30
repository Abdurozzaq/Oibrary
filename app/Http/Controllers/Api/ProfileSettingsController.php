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
        ]);

        $user = User::findOrFail(Auth::user()->id);
        $user->first_name = $request['first_name'];
        $user->last_name = $request['last_name'];
        if ($request['restaurant_name']) {
            $user->restaurant_name = $request['restaurant_name'];
        }
        $user->save();

        return response()->json([
            'status' => 'success',
            'message' => 'Identity Changed Successfully',
        ], 200);
        
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
