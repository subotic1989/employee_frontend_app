import { createAction, props } from '@ngrx/store';
import { IEmployee } from 'src/app/models/employee.interface';

// GET Employee
export const getEmployee = createAction(
  '[EMPLOYEE] Get Employee',
  props<{ employeeId: string }>()
);

export const getEmployeeSuccess = createAction(
  '[EMPLOYEE] Get Employee: Success',
  props<{ employee: IEmployee }>()
);

export const getEmployeeError = createAction(
  '[EMPLOYEE] Get Employee: Error',
  props<{ error: string }>()
);

// CREATE Employee
export const createEmployee = createAction(
  '[EMPLOYEE] Create Employee',
  props<{ employeeRequest: IEmployee }>()
);

export const createEmployeeSuccess = createAction(
  '[EMPLOYEE] Create Employee: Success',
  props<{ employeeResponse: IEmployee }>()
);

export const createEmployeeError = createAction(
  '[EMPLOYEE] Create Employee: Error',
  props<{ error: string }>()
);

// UPDATE Employee
export const updateEmployee = createAction(
  '[EMPLOYEE] Update Employee',
  props<{ employeeId: string; employeeRequest: IEmployee }>()
);

export const updateEmployeeSuccess = createAction(
  '[EMPLOYEE] Update Employee: Success',
  props<{ employeeResponse: IEmployee }>()
);

export const updateEmployeeError = createAction(
  '[EMPLOYEE] Update Employee: Error',
  props<{ error: string }>()
);

// DELETE Employee
export const deleteEmployee = createAction(
  '[EMPLOYEE] Delete Employee',
  props<{ employeeId: string }>()
);

export const deleteEmployeeSuccess = createAction(
  '[EMPLOYEE] Delete Employee: Success',
  props<{ employeeResponse: IEmployee }>()
);

export const deleteEmployeeError = createAction(
  '[EMPLOYEE] Delete Employee: Error',
  props<{ error: string }>()
);
