<?php

namespace App;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Tymon\JWTAuth\Contracts\JWTSubject;
use Spatie\Permission\Traits\HasRoles;
use App\Notifications\VerifyApiEmail;
use App\Notifications\ResetPasswordNotification;

class User extends Authenticatable implements JWTSubject
{
    use Notifiable, HasRoles;

    protected $guard_name ='api';

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'kode_user', 'kode_user_full', 'foto_user', 'id_prefix', 'first_name', 'last_name', 'nis', 'nuptk', 'alamat', 'no_telp', 'email', 'password',
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    public function sendApiEmailVerificationNotification()
    {
        $this->notify(new VerifyApiEmail);
    }

    public function sendPasswordResetNotification($token)
    {
        $this->notify(new ResetPasswordNotification($token));
    }

    
    // Rest omitted for brevity

    /**
     * Get the identifier that will be stored in the subject claim of the JWT.
     *
     * @return mixed
     */
    public function getJWTIdentifier()
    {
        return $this->getKey();
    }

    /**
     * Return a key value array, containing any custom claims to be added to the JWT.
     *
     * @return array
     */
    public function getJWTCustomClaims()
    {
        return [];
    }




    public function prefix()
    {
        return $this->belongsTo('App\Prefix', 'id_prefix');
    }


    public static function boot() {
        parent::boot();

        static::creating(function($model) {
            $model->kode_user = User::where('id_prefix', $model->id_prefix)->max('kode_user') + 1;
            $model->kode_user_full = $model->prefix->prefix . str_pad($model->kode_user, 5, 0, STR_PAD_LEFT);
        });
    }
}
