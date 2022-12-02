import { createReducer, on, Action } from '@ngrx/store';
import * as actions from './employee.actions';
import { IEmployee } from 'src/app/models/employee.interface';

export interface EmployeeStateInterface {
  loading: boolean;
  employee: IEmployee | null;
  error: string | null;
}

export const initState: EmployeeStateInterface = {
  loading: false,
  employee: null,
  error: null,
};

const employeeReducer = createReducer(
  initState,

  // GET employee
  on(
    actions.getEmployee,
    (state): EmployeeStateInterface => ({
      ...state,
      loading: true,
      error: null,
    })
  ),
  on(
    actions.getEmployeeSuccess,
    (state, action): EmployeeStateInterface => ({
      ...state,
      loading: false,
      employee: action.employee,
    })
  ),
  on(
    actions.getEmployeeError,
    (state, action): EmployeeStateInterface => ({
      ...state,
      loading: false,
      error: action.error,
    })
  ),

  // CREATE employee
  on(
    actions.createEmployee,
    (state): EmployeeStateInterface => ({
      ...state,
      loading: true,
      error: null,
    })
  ),
  on(
    actions.createEmployeeSuccess,
    (state, action): EmployeeStateInterface => ({
      ...state,
      loading: false,
      employee: action.employeeResponse,
    })
  ),
  on(
    actions.createEmployeeError,
    (state, action): EmployeeStateInterface => ({
      ...state,
      loading: false,
      error: action.error,
    })
  ),

  // UPDATE employee
  on(
    actions.updateEmployee,
    (state): EmployeeStateInterface => ({
      ...state,
      loading: true,
      error: null,
    })
  ),
  on(
    actions.updateEmployeeSuccess,
    (state, action): EmployeeStateInterface => ({
      ...state,
      loading: false,
      employee: action.employeeResponse,
    })
  ),
  on(
    actions.updateEmployeeError,
    (state, action): EmployeeStateInterface => ({
      ...state,
      loading: false,
      error: action.error,
    })
  ),

  // DELETE employee
  on(
    actions.deleteEmployee,
    (state): EmployeeStateInterface => ({
      ...state,
      loading: true,
      error: null,
    })
  ),
  on(
    actions.deleteEmployeeSuccess,
    (state, action): EmployeeStateInterface => ({
      ...state,
      loading: false,
      employee: action.employeeResponse,
    })
  ),
  on(
    actions.deleteEmployeeError,
    (state, action): EmployeeStateInterface => ({
      ...state,
      loading: false,
      error: action.error,
    })
  )
);

export function ReducerEmployee(state: EmployeeStateInterface, action: Action) {
  return employeeReducer(state, action);
}
