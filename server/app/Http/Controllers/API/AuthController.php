<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;
use App\Models\User;
use Illuminate\Support\Facades\Password;
use Illuminate\Support\Str;


class AuthController extends Controller
{
    public function register(Request $request){
        $validator=Validator::make($request->all(),[
            'firstname' => 'required|string|max:255',
            'lastname' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:users',
            'password' => 'required|string|min:8',
            'userRole' => 'required|string|max:255',
        ]);
        if($validator->fails()){
            return response()->json($validator->errors());
        }
        $existingUser=User::get()->where('email',$request->email);
        if(count($existingUser)!=0){
            return response()->json(['message'=>'User with this email alredy exists in system!']);
        }
        $user=User::create([
            'firstname'=>$request->firstname,
            'email'=>$request->email,
            'password'=>Hash::make($request->password),
            'lastname' => 'required|string|max:255',
            'userRole' => 'required|string|max:255',
        ]);

        $token=$user->createToken('token')->plainTextToken;

        return response()->json(['user'=>$user,'token'=>$token]);
    }

    public function login(Request $request){
        if(!Auth::attempt($request->only('email','password'))){
            return response()->json(['error' => 'Email or password are wrong!'], 401);

        }
        $user=User::where('email',$request->email)->firstOrFail();
        $token=$user->createToken('token')->plainTextToken;

        return response()->json(['message'=>'Welcome '.$user->name,'token'=>$token]);
    }  

    public function logout(Request $request){
        if (auth()->user()) {
            auth()->user()->tokens()->delete();
        }

        return response()->json('Goodbye. You successfully logged out!');
    }



    
    public function resetPassword(Request $request)
    {
    $request->validate([
        'email' => 'required|email',
        'token' => 'required',
        'password' => 'required|confirmed|min:8',
    ]);

    $response = Password::reset($request->only('email', 'password', 'password_confirmation', 'token'), function ($user, $password) {
        $user->forceFill([
            'password' => bcrypt($password),
            'remember_token' => Str::random(60),
        ])->save();
    });

    return $response == Password::PASSWORD_RESET
        ? response()->json(['message' => 'Password reset successful'], 200)
        : response()->json(['message' => 'Password reset failed'], 400);
    }

}
