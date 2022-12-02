import { createAction, props } from '@ngrx/store';
import { IEmployee } from 'src/app/models/employee.interface';

//Get All Employees
export const getAllEmployees = createAction('[EMPLOYEE] Get Employees');

export const getAllEmployeesSuccess = createAction(
  '[EMPLOYEE] Get Employees: Success',
  props<{ employees: IEmployee[] }>()
);

export const getAllEmployeesError = createAction(
  '[EMPLOYEE] Get Employees: Error',
  props<{ error: string }>()
);
