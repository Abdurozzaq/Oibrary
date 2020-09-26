<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        //
    }

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        // for deploy (test on netlify)
        if($this->app->environment() == 'production') {
            \URL::forceScheme('https');
            \URL::forceRootUrl(\Config::get('app.url'));
        }
    }
}
