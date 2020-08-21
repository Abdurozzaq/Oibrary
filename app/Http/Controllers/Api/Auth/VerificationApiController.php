<?php
namespace App\Http\Controllers\Api\Auth;

use App\Http\Controllers\Controller;
use App\User;
use Illuminate\Foundation\Auth\VerifiesEmails;
use Illuminate\Http\Request;
use Validator;
use Illuminate\Auth\Events\Verified;
class VerificationApiController extends Controller
{
    use VerifiesEmails;
    /**
    * Show the email verification notice.
    *
    */
    public function show()
    {
    //
    }


    /**
    * Mark the authenticated user's email address as verified.
    *
    * @param \Illuminate\Http\Request $request
    * @return \Illuminate\Http\Response
    */
    public function verify(Request $request) {
        $userID = $request['id'];
        $user = User::findOrFail($userID);
        $date = date("Y-m-d g:i:s");
        $user->email_verified_at = $date; // to enable the “email_verified_at field of that user be a current time stamp by mimicing the must verify email feature
        $user->save();
        
        return \Redirect::to(config('frontend.verified_email_url'));
    }



    /**
    * Resend the email verification notification.
    *
    * @param \Illuminate\Http\Request $request
    * @return \Illuminate\Http\Response
    */
    public function resendVerificationmail(Request $request) {
        $validator = Validator::make($request->all(),[
            'email' => 'required|email|exists:users,email',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'status' => 'failed',
                'errors' => $validator->errors()
            ], 401);
        } else {

            $user = User::where('email', $request->email)->first();
            $user->sendApiEmailVerificationNotification();

            return response()->json([
                'status' => 'Success',
                'message' => 'Email Verification has been send!'
            ], 200);
        }
    }
}