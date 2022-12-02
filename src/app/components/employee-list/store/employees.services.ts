import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { IEmployee } from '../../../models/employee.interface';
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
}
