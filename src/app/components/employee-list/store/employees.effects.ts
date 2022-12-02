import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, delay, map, of, switchMap } from 'rxjs';
import * as actions from './employees.actions';
import { EmployeesService } from './employees.services';
import { IEmployee } from 'src/app/models/employee.interface';

@Injectable()
export class EmployeeEffects {
  constructor(
    private actions$: Actions,
    private employeesService: EmployeesService
  ) {}

  getEmployees$ = createEffect(() =>
    this.actions$.pipe(
      ofType(actions.getAllEmployees),
      switchMap(() => {
        return this.employeesService.getAllEmployees().pipe(
          delay(500),
          map((data: IEmployee[]) => {
            return actions.getAllEmployeesSuccess({ employees: data });
          }),

          catchError((err) => of(actions.getAllEmployeesError({ error: err })))
        );
      })
    )
  );
}
