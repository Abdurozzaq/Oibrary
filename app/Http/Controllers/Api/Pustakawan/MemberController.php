<?php

namespace App\Http\Controllers\Api\Pustakawan;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\User;
use Carbon\Carbon;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\DB;

class MemberController extends Controller
{
    public function getDaftarMember() {
        $users = User::role('member')
                        ->select(
                            'users.*', 
                            DB::raw('CONCAT(users.first_name, " ", users.last_name) AS full_name')
                        )
                        ->get();

        return response()->json([
            'status' => 'success',
            'message' => 'Data Anggota telah berhasil diambil.',
            'data' => $users
        ], 200);
    }

    public function createMember(Request $request) {
        $this->validate($request, [
            'first_name' => 'required',
            'last_name' => 'required',
            'email' => 'required|email|unique:users',
            'role' => 'required'
        ]);

        if($request->hasFile('foto_user')){
            $resource = $request->file('foto_user');
            $name = Carbon::now()->timestamp."_".$resource->getClientOriginalName();
            $userId = Auth::user()->id;
            $url = "/storage/foto_user/".$userId."/".$name;
            $resource->move(\base_path() ."/public/storage/foto_user/".$userId, $name);
                
    
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
            
            return response()->json([
              'status' => 'success',
              'message' => 'Anggota telah berhasil ditambahkan'
            ], 200);

          } else {

            $user = User::create([
                'first_name' => $request['first_name'],
                'last_name' => $request['last_name'],
                'email' => $request['email'],
                'nis' => $request['nis'],
                'nuptk' => $request['nuptk'],
                'alamat' => $request['alamat'],
                'no_telp' => $request['no_telp'],
                'id_prefix' => '3'
            ])->assignRole('member');

            return response()->json([
                'status' => 'success',
                'message' => 'Anggota telah berhasil ditambahkan, tanpa foto user.'
            ], 200);
    
        }
    }

    public function editMember(Request $request, $id) {

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
            $userId = Auth::user()->id;
            $url = "/storage/foto_user/".$userId."/".$name;
            $resource->move(\base_path() ."/public/storage/foto_user/".$userId, $name);
                
            $anggota = User::findOrFail($id);
            $anggota->foto_user = $url;
            $anggota->first_name = $request['first_name'];
            $anggota->last_name = $request['last_name'];
            if ($anggota->email != $request['email']) {
                $anggota->email = $request['email'];
                $anggota->email_verified_at = Carbon::now()->timestamp;
            }
            if ($request['nis']) {
                $anggota->nis = $request['nis'];
            }
            if ($request['nuptk']) {
                $anggota->nuptk = $request['nuptk'];
            }
            $anggota->alamat = $request['alamat'];
            $anggota->no_telp = $request['no_telp'];
            $anggota->save();
            
            return response()->json([
              'status' => 'success',
              'message' => 'Anggota telah berhasil ditambahkan'
            ], 200);

          } else {

            $anggota = User::findOrFail($id);
            $anggota->first_name = $request['first_name'];
            $anggota->last_name = $request['last_name'];
            if ($anggota->email != $request['email']) {
                $anggota->email = $request['email'];
                $anggota->email_verified_at = Carbon::now()->timestamp;
            }
            if ($request['nis']) {
                $anggota->nis = $request['nis'];
            }
            if($request['nuptk']) {
                $anggota->nuptk = $request['nuptk'];
            }
            $anggota->alamat = $request['alamat'];
            $anggota->no_telp = $request['no_telp'];
            $anggota->save();

            return response()->json([
                'status' => 'success',
                'message' => 'Anggota telah berhasil ditambahkan, tanpa foto user.'
            ], 200);
    
        }

    }


    public function deleteMember($id) {

        $member = User::findOrFail($id);
        $member->delete();

        return response()->json([
            'status' => 'success',
            'message' => 'Anggota telah berhasil dihapus.'
        ], 200);
    }
}
