import {Component, OnInit} from '@angular/core';
import {Employee} from './employee';
import { EmployeesService } from './employees.service';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'employees',
  templateUrl: './employees.component.html'
})
export class EmployeesComponent implements OnInit{

  // tslint:disable-next-line:variable-name
  private _employeeService;
  title = 'takrosystem';
  // listFilter = 'mazda';
  // tslint:disable-next-line:variable-name
  private _listFilter: string;

  filteredEmployees: Employee[];

  employees: Employee[];

  get listFilter(): string {
    return this._listFilter;
  }
  set listFilter(value: string) {
    this._listFilter = value;
    this.filteredEmployees = this._listFilter ? this.performFilter(this._listFilter) : this.employees;
  }

  constructor(private employeeService: EmployeesService) {
    this._employeeService = employeeService;
  }

  ngOnInit(): void {
    this.employees = this._employeeService.getEmployee();
    this.filteredEmployees = this.employees;
  }

  performFilter(st: string): Employee[] {
    st = st.toLowerCase();
    // tslint:disable-next-line:triple-equals
    return this.employees.filter((employee: Employee) => employee.firstName.toLowerCase().indexOf(st) != -1);
  }
}
