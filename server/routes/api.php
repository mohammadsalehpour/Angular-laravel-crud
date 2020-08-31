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
Route::get('task', function(){
    return "Mohammad";
});

Route::get('tasks', 'Client\TaskController@index');
Route::get('tasks/{id}', 'Client\TaskController@show');
Route::post('tasks', 'Client\TaskController@store');
Route::put('tasks/{id}', 'Client\TaskController@update');
Route::delete('tasks/{id}', 'Client\TaskController@delete');

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});
