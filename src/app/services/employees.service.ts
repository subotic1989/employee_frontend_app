import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { IEmployee } from '../models/employee.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EmployeesService {
  baseApiUrl: string = environment.baseApiUrl;

  constructor(private http: HttpClient) {}

  getAllEmployees(): Observable<IEmployee[]> {
    return this.http.get<IEmployee[]>(this.baseApiUrl + '/api/employees');
  }

  createEmployees(employeeRequest: IEmployee): Observable<IEmployee> {
    return this.http.post<IEmployee>(
      this.baseApiUrl + '/api/employees',
      employeeRequest
    );
  }

  getEmployee(employeeId: string): Observable<IEmployee> {
    return this.http.get<IEmployee>(
      this.baseApiUrl + '/api/employees/' + employeeId
    );
  }

  updateEmployee(
    employeeId: string,
    employeeRequest: IEmployee
  ): Observable<IEmployee> {
    return this.http.put<IEmployee>(
      this.baseApiUrl + '/api/employees/' + employeeId,
      employeeRequest
    );
  }

  deleteEmployee(employeeId: string): Observable<IEmployee> {
    return this.http.delete<IEmployee>(
      this.baseApiUrl + '/api/employees/' + employeeId
    );
  }
}
