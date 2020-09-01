<?php

namespace App\Http\Controllers\Client;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Employee;

class EmployeeController extends Controller
{
    public function index()
    {
        return Employee::all();
    }

    public function create()
    {
        //
    }

    public function store(Request $request)
    {
        return Employee::create($request->all());
    }

    public function show($id)
    {
        return Employee::find($id);
    }

    public function edit($id)
    {
        //
    }

    public function update(Request $request, $id)
    {
        $task = Employee::findOrFail($id);
        $task->update($request->all());

        return $task;
    }

    public function destroy($id)
    {
        $task = Employee::findOrFail($id);
        $task->delete();

        return 204;
    }
}
