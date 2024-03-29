<?php

Route::group(['prefix' => 'secure', 'middleware' => 'web'], function () {
    //BOOTSTRAP
    Route::get('bootstrap-data', 'Common\Core\Controllers\BootstrapController@getBootstrapData');

    // LOGIN
    Route::post('auth/register', 'Common\Auth\Controllers\RegisterController@register');
    Route::post('auth/login', 'Common\Auth\Controllers\LoginController@login');
    Route::post('auth/logout', 'Common\Auth\Controllers\LoginController@logout');

    // FORGOT/RESET PASSWORD
    Route::post('auth/password/email', 'Common\Auth\Controllers\SendPasswordResetEmailController@sendResetLinkEmail');
    Route::post('auth/password/reset', 'Common\Auth\Controllers\ResetPasswordController@reset');

    // VERIFY EMAIL
    Route::post('auth/email/verify/resend', 'Common\Auth\Controllers\VerifyEmailController@resend');
    Route::get('auth/email/verify/{id}/{hash}', 'Common\Auth\Controllers\VerifyEmailController@verify')->name('verification.verify');

    //SOCIAL AUTHENTICATION
    Route::get('auth/social/{provider}/connect', 'Common\Auth\Controllers\SocialAuthController@connect');
    Route::get('auth/social/{provider}/login', 'Common\Auth\Controllers\SocialAuthController@login');
    Route::get('auth/social/{provider}/callback', 'Common\Auth\Controllers\SocialAuthController@loginCallback');
    Route::post('auth/social/extra-credentials', 'Common\Auth\Controllers\SocialAuthController@extraCredentials');
    Route::post('auth/social/{provider}/disconnect', 'Common\Auth\Controllers\SocialAuthController@disconnect');

    //USERS
    Route::apiResource('users', 'Common\Auth\Controllers\UserController');

    //ROLES
    Route::get('roles', 'Common\Auth\Roles\RolesController@index');
    Route::post('roles', 'Common\Auth\Roles\RolesController@store');
    Route::put('roles/{id}', 'Common\Auth\Roles\RolesController@update');
    Route::delete('roles/{id}', 'Common\Auth\Roles\RolesController@destroy');
    Route::post('roles/{id}/add-users', 'Common\Auth\Roles\RolesController@addUsers');
    Route::post('roles/{id}/remove-users', 'Common\Auth\Roles\RolesController@removeUsers');

    //USER PASSWORD
    Route::post('users/{id}/password/change', 'Common\Auth\Controllers\ChangePasswordController@change');

    //USER AVATAR
    Route::post('users/{id}/avatar', 'Common\Auth\Controllers\UserAvatarController@store');
    Route::delete('users/{id}/avatar', 'Common\Auth\Controllers\UserAvatarController@destroy');

    //USER ROLES
    Route::post('users/{id}/roles/attach', 'Common\Auth\Roles\UserRolesController@attach');
    Route::post('users/{id}/roles/detach', 'Common\Auth\Roles\UserRolesController@detach');

    //USER PERMISSIONS
    Route::post('users/{id}/permissions/add', 'Common\Auth\Controllers\UserPermissionsController@add');
    Route::post('users/{id}/permissions/remove', 'Common\Auth\Controllers\UserPermissionsController@remove');

    // CHUNKED UPLOADS
    Route::post('uploads/sessions/load', 'Common\Files\Chunks\ChunkedUploadsController@load');
    Route::post('uploads/sessions/chunks', 'Common\Files\Chunks\ChunkedUploadsController@storeChunk');

    //UPLOADS
    Route::get('uploads/server-max-file-size', 'Common\Files\Controllers\ServerMaxUploadSizeController@index');
    Route::get('uploads', 'Common\Files\Controllers\FileEntriesController@index');
    Route::get('uploads/download', 'Common\Files\Controllers\DownloadFileController@download');
    Route::post('uploads/images', 'Common\Files\Controllers\PublicUploadsController@images');
    Route::post('uploads/videos', 'Common\Files\Controllers\PublicUploadsController@videos');
    Route::post('uploads/favicon', 'Common\Files\Controllers\UploadFaviconController@store');
    Route::get('uploads/{id}', 'Common\Files\Controllers\FileEntriesController@show');
    Route::post('uploads', 'Common\Files\Controllers\FileEntriesController@store');
    Route::put('uploads/{id}', 'Common\Files\Controllers\FileEntriesController@update');
    Route::delete('uploads', 'Common\Files\Controllers\FileEntriesController@destroy');
    Route::post('uploads/{id}/add-preview-token', 'Common\Files\Controllers\AddPreviewTokenController@store');

    // PAGES
    Route::apiResource('page', 'Common\Pages\CustomPageController');

    //VALUE LISTS
    Route::get('value-lists/{names}', 'Common\Core\Values\ValueListsController@index');

    //SETTINGS
    Route::get('settings', 'Common\Settings\SettingsController@index');
    Route::post('settings', 'Common\Settings\SettingsController@persist');

    // APPEARANCE EDITOR
    Route::post('admin/appearance', 'Common\Admin\Appearance\Controllers\AppearanceController@save');
    Route::get('admin/appearance/values', 'Common\Admin\Appearance\Controllers\AppearanceController@getValues');
    Route::get('admin/icons', 'Common\Admin\Appearance\Controllers\IconController@index');

    // MENUS
    Route::get('admin/appearance/menu-categories', 'Common\Admin\Appearance\Controllers\MenuCategoriesController@index');

    // CSS THEME
    Route::apiResource('css-theme', 'Common\Admin\Appearance\Themes\CssThemeController');

    //LOCALIZATIONS
    Route::get('localizations', 'Common\Localizations\LocalizationsController@index');
    Route::post('localizations', 'Common\Localizations\LocalizationsController@store');
    Route::put('localizations/{id}', 'Common\Localizations\LocalizationsController@update');
    Route::delete('localizations/{id}', 'Common\Localizations\LocalizationsController@destroy');
    Route::get('localizations/{name}', 'Common\Localizations\LocalizationsController@show');

    //OTHER ADMIN ROUTES
    Route::get('admin/analytics/stats', 'Common\Admin\Analytics\AnalyticsController@stats');
    Route::post('cache/flush', 'Common\Admin\CacheController@flush');

    //billing plans
    Route::apiResource('billing-plan', 'Common\Billing\Plans\BillingPlansController');
    Route::post('billing-plan/sync', 'Common\Billing\Plans\BillingPlansController@sync');

    // SUBSCRIPTIONS
    Route::get('billing/subscriptions', 'Common\Billing\Subscriptions\SubscriptionsController@index');
    Route::post('billing/subscriptions', 'Common\Billing\Subscriptions\SubscriptionsController@store');
    Route::post('billing/subscriptions/stripe', 'Common\Billing\Gateways\Stripe\StripeController@createSubscription');
    Route::post('billing/subscriptions/stripe/finalize', 'Common\Billing\Gateways\Stripe\StripeController@finalizeSubscription');
    Route::post('billing/subscriptions/paypal/agreement/create', 'Common\Billing\Gateways\Paypal\PaypalController@createSubscriptionAgreement');
    Route::post('billing/subscriptions/paypal/agreement/execute', 'Common\Billing\Gateways\Paypal\PaypalController@executeSubscriptionAgreement');
    Route::delete('billing/subscriptions/{id}', 'Common\Billing\Subscriptions\SubscriptionsController@cancel');
    Route::put('billing/subscriptions/{id}', 'Common\Billing\Subscriptions\SubscriptionsController@update');
    Route::post('billing/subscriptions/{id}/resume', 'Common\Billing\Subscriptions\SubscriptionsController@resume');
    Route::post('billing/subscriptions/{id}/change-plan', 'Common\Billing\Subscriptions\SubscriptionsController@changePlan');
    Route::post('billing/stripe/cards/add', 'Common\Billing\Gateways\Stripe\StripeController@addCard');

    // NOTIFICATIONS
    Route::get('notifications', 'Common\Notifications\NotificationController@index');
    Route::post('notifications/mark-as-read', 'Common\Notifications\NotificationController@markAsRead');
    Route::get('notifications/{userId}/subscriptions', 'Common\Notifications\NotificationSubscriptionsController@index');
    Route::put('notifications/{userId}/subscriptions', 'Common\Notifications\NotificationSubscriptionsController@update');

    // TAGS
    Route::get('tags', 'Common\Tags\TagController@index');
    Route::post('tags', 'Common\Tags\TagController@store');
    Route::put('tags/{id}', 'Common\Tags\TagController@update');
    Route::delete('tags/{tagIds}', 'Common\Tags\TagController@destroy');

    // INVOICES
    Route::get('billing/invoice', 'Common\Billing\Invoices\InvoiceController@index');
    Route::get('billing/invoice/{uuid}', 'Common\Billing\Invoices\InvoiceController@show');

    // COMMENTS
    Route::apiResource('comment', 'Common\Comments\CommentController');

    // contact us page
    Route::post('contact-page', 'Common\Pages\ContactPageController@sendMessage');
    Route::post('recaptcha/verify', 'Common\Validation\RecaptchaController@verify');
});

// no need for "secure" prefix here, but need "web" middleware
Route::group(['middleware' => 'web'], function() {
    Route::get('update', 'Common\Core\Controllers\UpdateController@show');
    Route::get('secure/update', 'Common\Core\Controllers\UpdateController@show');
    Route::post('secure/update/run', 'Common\Core\Controllers\UpdateController@update');

    // CUSTOM DOMAIN
    Route::group(['prefix' => 'secure', 'middleware' => 'customDomainsEnabled'], function() {
        Route::apiResource('custom-domain', 'Common\Domains\CustomDomainController');
        Route::post('custom-domain/authorize/{method}', 'Common\Domains\CustomDomainController@authorizeCrupdate')->where('method', 'store|update');
    });

    // FRONT-END ROUTES THAT NEED TO BE PRE-RENDERED
    Route::get('pages/{page}/{slug}', 'Common\Pages\CustomPageController@show')->middleware(['web', 'prerenderIfCrawler']);
});

// NO "WEB" MIDDLEWARE IS APPLIED TO THESE ROUTES

Route::post('secure/password/check', 'Common\Validation\CheckPasswordController@check');

// CUSTOM DOMAIN
Route::group(['prefix' => 'secure', 'middleware' => 'customDomainsEnabled'], function() {
    Route::post('custom-domain/validate/2BrM45vvfS/api', 'Common\Domains\CustomDomainController@validateDomainApi');
    Route::get('custom-domain/validate/2BrM45vvfS', 'Common\Domains\CustomDomainController@validateDomain');
});

// PAYPAL
Route::get('billing/paypal/callback/approved', 'Common\Billing\Gateways\Paypal\PaypalController@approvedCallback');
Route::get('billing/paypal/callback/canceled', 'Common\Billing\Gateways\Paypal\PaypalController@canceledCallback');
Route::get('billing/paypal/loading', 'Common\Billing\Gateways\Paypal\PaypalController@loadingPopup');

// STRIPE
Route::post('billing/stripe/webhook', 'Common\Billing\Gateways\Stripe\StripeWebhookController@handleWebhook');
Route::post('billing/paypal/webhook', 'Common\Billing\Gateways\Paypal\PaypalWebhookController@handleWebhook');

// Laravel Auth routes with names so route('login') and similar calls don't error out
Route::get('login', '\Common\Core\Controllers\HomeController@show')->name('login');
Route::get('register', '\Common\Core\Controllers\HomeController@show')->name('register');
