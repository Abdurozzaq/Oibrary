<?php

namespace App\Imports;

use App\User;
use Carbon\Carbon;
use Illuminate\Validation\Rule;
use Maatwebsite\Excel\Concerns\Importable;
use Maatwebsite\Excel\Concerns\WithValidation;
use Maatwebsite\Excel\Concerns\ToCollection;
use Illuminate\Support\Collection;
use Maatwebsite\Excel\Concerns\WithHeadingRow;
use Illuminate\Support\Facades\Validator;

class AnggotaImport implements ToCollection, WithHeadingRow
{
    use Importable;

    // public function rules(): array
    // {
    //     return [
    //         '*.first_name' => 'required',
    //         '*.last_name' => 'required',
    //         '*.email' => 'required|email|unique:users',
    //     ];

    // }

    public function collection(Collection $rows)
    {

        Validator::make($rows->toArray(), [
            '*.first_name' => 'required',
            '*.last_name' => 'required',
            '*.email' => 'required|email|unique:users',
        ])->validate();

        foreach ($rows as $row) 
        {
            $user = User::create([
                'email_verified_at' => Carbon::now()->timestamp,
                'id_prefix' => '3',
                'first_name' => $row['first_name'],
                'last_name' => $row['last_name'], 
                'email' => $row['email'], 
                'nis' => $row['nis'], 
                'nuptk' => $row['nuptk'], 
                'alamat' => $row['alamat'], 
                'no_telp' => $row['no_telp'],
            ]);
    
            $user->assignRole('member');
        }
    }

    
}
