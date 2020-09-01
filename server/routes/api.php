<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/
//Route::get('task', function(){
//    return "Mohammad";
//});

Route::get('task', 'Client\TaskController@index');
Route::get('task/{id}', 'Client\TaskController@show');
Route::post('task', 'Client\TaskController@store');
Route::put('task/{id}', 'Client\TaskController@update');
Route::delete('task/{id}', 'Client\TaskController@destroy');

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});
