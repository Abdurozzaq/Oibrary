<?php

namespace App\Http\Controllers\Api\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\User;
use Illuminate\Support\Facades\Hash;
use Validator;
use Illuminate\Foundation\Auth\VerifiesEmails;
use Illuminate\Auth\Events\Verified;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    /**
     * Create a new AuthController instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth:api', ['except' => ['login', 'register', 'me', 'refresh']]);
    }





    public function refresh() {
        return response()->json([
            'status' => 'success',
            'token' => auth()->refresh(true, true),
        ], 200);
    }





    public function me() {

        return response()->json([
            'status' => 'success',
            'user' => Auth::user(),
            'role' => Auth::user()->roles->pluck('name'),
        ], 200);
    }





    public function logoutCurrentUser() {
        auth()->logout();

        return response()->json([
            'status' => 'success',
            'message' => 'Token Deleted / Logged Out'
        ], 200);
    }





    /**
     * Get the token array structure.
     *
     * @param  string $token
     *
     * @return \Illuminate\Http\JsonResponse
     */
    protected function respondWithToken($token)
    {
        return response()->json([
            'access_token' => $token,
            'token_type' => 'bearer',
            'expires_in' => auth('api')->factory()->getTTL() * 60
        ]);
    }





    public function login(Request $request)
    {
        $this->validate($request, [
            'email' => 'required|email|exists:users,email',
            'password' => 'required',
        ]);

        $credentials = request(['email', 'password']);

        if (! $token = auth()->attempt($credentials)) {
            return response()->json(["errors" => ['password' => ['Wrong Password'] ] ], 401);
        }

        return $this->respondWithToken($token);

    }





    public function register(Request $request)
    {
        $validator = Validator::make($request->all(),[
            'first_name' => 'required',
            'last_name' => 'required',
            'email' => 'required|email|unique:users',
            'password' => 'required|confirmed|min:8',
            'password_confirmation' => 'required|min:8',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'status' => 'failed',
                'errors' => $validator->errors()
            ], 400);
        } else {
            $user = User::create([
                'first_name' => $request->first_name,
                'last_name' => $request->last_name,
                'email' => $request->email,
                'password' => Hash::make($request->password),
            ])->assignRole('user');

            $user->sendApiEmailVerificationNotification();

            return response()->json([
                'status' => 'success',
                'message' => 'Please confirm yourself by clicking on verify user button sent to you on your email'
            ], 200);
        }

    }
    
}