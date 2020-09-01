import {Injectable} from '@angular/core';
import {Employee} from './employee';

@Injectable({
  providedIn: 'root'
})

export class EmployeesService {
  getEmployee(): Employee[] {
    return [
      {
        id: 1,
        firstName: 'Mohammad',
        lastName: 'Saleh pour',
        age: 21,
        status: true
      },
      {
        id: 2,
        firstName: 'Amir',
        lastName: 'Alizade',
        age: 25,
        status: false
      },
      {
        id: 3,
        firstName: 'Ali',
        lastName: 'salmani',
        age: 28,
        status: false
      },
      {
        id: 4,
        firstName: 'milad',
        lastName: 'ezzati',
        age: 30,
        status: true
      }
    ];
  }
}
