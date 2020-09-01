<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Employee extends Model
{
    protected $table = 'employees';

    protected $fillable = [
        'FullName',
        'EMPCode',
        'Mobile',
        'Position',
    ];
}
