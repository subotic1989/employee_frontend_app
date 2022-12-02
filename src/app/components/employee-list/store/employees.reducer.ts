import { createReducer, on, Action } from '@ngrx/store';
import { IEmployee } from 'src/app/models/employee.interface';
import * as actions from './employees.actions';

export interface EmployeesStateInterface {
  loading: boolean;
  employees: IEmployee[];
  error: string | null;
}

export const initState: EmployeesStateInterface = {
  loading: false,
  employees: [],
  error: null,
};

const EmployeesReducer = createReducer(
  initState,

  on(
    actions.getAllEmployees,
    (state): EmployeesStateInterface => ({
      ...state,
      loading: true,
      error: null,
    })
  ),
  on(
    actions.getAllEmployeesSuccess,
    (state, action): EmployeesStateInterface => ({
      ...state,
      loading: false,
      employees: action.employees,
    })
  ),
  on(
    actions.getAllEmployeesError,
    (state, action): EmployeesStateInterface => ({
      ...state,
      loading: false,
      error: action.error,
    })
  )
);

export function ReducerEmployees(
  state: EmployeesStateInterface,
  action: Action
) {
  return EmployeesReducer(state, action);
}
