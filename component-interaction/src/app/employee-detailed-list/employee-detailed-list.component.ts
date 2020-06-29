import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-detailed-list',
  template: `
    <h1> Employee detailed list </h1>
    <ul *ngFor ="let employee of employees">
      <li> {{employee.id}}. {{employee.name}} - {{employee.age}} </li>
    </ul>
    <br>
    <h1> Employee detailed list from http call </h1>
    <h3>{{errorMsg}}</h3>
    <ul *ngFor ="let employee of employeesFromHttpCall">
      <li> {{employee.id}}. {{employee.name}} - {{employee.age}} </li>
    </ul>

  `,
  styles: []
})
export class EmployeeDetailedListComponent implements OnInit {

  public employees = [];
  public employeesFromHttpCall = [];
  public errorMsg;

  constructor(private _employeeService: EmployeeService) { }

  ngOnInit(): void {
    this.employees = this._employeeService.getEmployees();
    this._employeeService.getEmployeesWithHttpCall()
                        .subscribe(data => this.employeesFromHttpCall = data,
                                   error => this.errorMsg = error); 
  }
}
