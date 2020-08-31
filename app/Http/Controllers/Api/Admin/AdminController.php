<?php

namespace App\Http\Controllers\Api\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\User;
use Carbon\Carbon;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\DB;
use Maatwebsite\Excel\Facades\Excel;

class AdminController extends Controller
{
    public function getDaftarAdmin() {
        $users = User::role('admin')
                        ->select(
                            'users.*', 
                            DB::raw('CONCAT(users.first_name, " ", users.last_name) AS full_name')
                        )
                        ->get();

        return response()->json([
            'status' => 'success',
            'message' => 'Data Admin telah berhasil diambil.',
            'data' => $users
        ], 200);
    }

    public function editAdmin(Request $request, $id) {

        if ($request['email']) {
            $user = User::findOrFail($id);
            if ($user->email == $request['email']) {
                $this->validate($request, [
                    'first_name' => 'required',
                    'last_name' => 'required',
                ]);
            } else {
                $this->validate($request, [
                    'first_name' => 'required',
                    'last_name' => 'required',
                    'email' => 'required|email|unique:users',
                ]);
            }
        }

        if($request->hasFile('foto_user')){
            $resource = $request->file('foto_user');
            $name = Carbon::now()->timestamp."_".$resource->getClientOriginalName();
            $userId = $id;
            $url = "/storage/foto_user/".$userId."/".$name;
            $resource->move(\base_path() ."/public/storage/foto_user/".$userId, $name);
                
            $admin = User::findOrFail($id);
            $admin->foto_user = $url;
            $admin->first_name = $request['first_name'];
            $admin->last_name = $request['last_name'];
            if ($admin->email != $request['email']) {
                $admin->email = $request['email'];
                $admin->email_verified_at = Carbon::now()->timestamp;
            }
            $admin->alamat = $request['alamat'];
            $admin->no_telp = $request['no_telp'];
            $admin->save();
            
            return response()->json([
              'status' => 'success',
              'message' => 'Admin telah berhasil ditambahkan'
            ], 200);

          } else {

            $admin = User::findOrFail($id);
            $admin->first_name = $request['first_name'];
            $admin->last_name = $request['last_name'];
            if ($admin->email != $request['email']) {
                $admin->email = $request['email'];
                $admin->email_verified_at = Carbon::now()->timestamp;
            }
            $admin->alamat = $request['alamat'];
            $admin->no_telp = $request['no_telp'];
            $admin->save();

            return response()->json([
                'status' => 'success',
                'message' => 'Admin telah berhasil ditambahkan, tanpa foto user.'
            ], 200);
    
        }

    }


    public function deleteAdmin($id) {

        $member = User::findOrFail($id);
        $member->delete();

        return response()->json([
            'status' => 'success',
            'message' => 'Admin telah berhasil dihapus.'
        ], 200);
    }

    public function searchAdmin(Request $request) {

        $this->validate($request, [
            'query' => 'required',
        ]);

        $query = $request['query'];

        $dataOri = User::orwhere('kode_user_full','like',"%".$query."%")
                        ->orWhere('first_name', 'like', "%".$query."%")
                        ->orWhere('last_name', 'like', "%".$query."%")
                        ->orWhere('alamat', 'like', "%".$query."%")
                        ->orWhere('no_telp', 'like', "%".$query."%")
                        ->orWhere('email', 'like', "%".$query."%")
                        ->select(
                            'users.*', 
                            DB::raw('CONCAT(users.first_name, " ", users.last_name) AS full_name')
                        )
                        ->get();
        
        $data = [];

        foreach ($dataOri as $item) {
            if ($item->hasRole('admin')) {
                array_push($data, $item);
            }
        }

        return response()->json([
            'status' => 'success',
            'message' => 'Berhasil Mencari Admin Dengan Kata Kunci Yang Diberikan',
            'data' => $data
        ], 200);
    }

}
