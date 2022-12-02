import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap } from 'rxjs';
import { EmployeesService } from './employee.services';
import { IEmployee } from 'src/app/models/employee.interface';
import * as actions from './employee.actions';
import { Router } from '@angular/router';

@Injectable()
export class EmployeeEffects {
  constructor(
    private router: Router,
    private actions$: Actions,
    private employeesService: EmployeesService
  ) {}

  getEmployee$ = createEffect(() =>
    this.actions$.pipe(
      ofType(actions.getEmployee),
      switchMap(({ employeeId }) => {
        return this.employeesService.getEmployee(employeeId).pipe(
          map((data: IEmployee) => {
            return actions.getEmployeeSuccess({ employee: data });
          }),
          catchError((err) => of(actions.getEmployeeError({ error: err })))
        );
      })
    )
  );

  createEmployee$ = createEffect(() =>
    this.actions$.pipe(
      ofType(actions.createEmployee),
      switchMap(({ employeeRequest }) => {
        return this.employeesService.createEmployee(employeeRequest).pipe(
          map((data: IEmployee) => {
            this.router.navigate(['employee-list']);
            return actions.createEmployeeSuccess({ employeeResponse: data });
          }),
          catchError((err) => of(actions.createEmployeeError({ error: err })))
        );
      })
    )
  );

  updateEmployee$ = createEffect(() =>
    this.actions$.pipe(
      ofType(actions.updateEmployee),
      switchMap(({ employeeId, employeeRequest }) => {
        return this.employeesService
          .updateEmployee(employeeId, employeeRequest)
          .pipe(
            map((data: IEmployee) => {
              this.router.navigate(['employee-list']);
              return actions.updateEmployeeSuccess({ employeeResponse: data });
            }),
            catchError((err) => of(actions.updateEmployeeError({ error: err })))
          );
      })
    )
  );

  deleteEmployee$ = createEffect(() =>
    this.actions$.pipe(
      ofType(actions.deleteEmployee),
      switchMap(({ employeeId }) => {
        return this.employeesService.deleteEmployee(employeeId).pipe(
          map((data: IEmployee) => {
            this.router.navigate(['employee-list']);
            return actions.deleteEmployeeSuccess({ employeeResponse: data });
          }),
          catchError((err) => of(actions.deleteEmployeeError({ error: err })))
        );
      })
    )
  );
}
