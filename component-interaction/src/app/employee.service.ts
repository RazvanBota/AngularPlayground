import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { IEmployee } from './employee';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})

export class EmployeeService {

  private _url: string = "../assets/data/employees.jso";

  constructor(private http: HttpClient) { }

  getEmployees(){
    return [
      {"id": 1, "name": "Andrei", "age": 20},
      {"id": 2, "name": "Matei",  "age": 26},
      {"id": 3, "name": "Stefan", "age": 25},
      {"id": 4, "name": "Matei",  "age": 18}
    ];
  }

  //We are using mocked data to do not create a server just for this.
  getEmployeesWithHttpCall(): Observable<IEmployee[]>{
    return this.http.get<IEmployee[]>(this._url)
                    .pipe(catchError(this.errorHandler));
    }

  errorHandler(error: HttpErrorResponse){
    return Observable.throw(error.message || "Server Error");
  }
}
