<?php

namespace App\Providers;

use App\ListModel;
use App\Policies\CaptionPolicy;
use App\Policies\ListPolicy;
use App\VideoCaption;
use Illuminate\Foundation\Support\Providers\AuthServiceProvider as ServiceProvider;

class AuthServiceProvider extends ServiceProvider
{
    /**
     * The policy mappings for the application.
     *
     * @var array
     */
    protected $policies = [
        VideoCaption::class => CaptionPolicy::class,
        ListModel::class => ListPolicy::class,
    ];

    /**
     * Register any authentication / authorization services.
     *
     * @return void
     */
    public function boot()
    {
        $this->registerPolicies();

        //
    }
}
