<?php

namespace App\Http\Controllers\Api\Pustakawan;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\User;

class MemberController extends Controller
{
    public function getDaftarMember() {
        $users = User::role('member')->get();

        return response()->json([
            'status' => 'success',
            'message' => 'Data Anggota telah berhasil diambil.',
            'data' => $users
        ], 200);
    }
}
