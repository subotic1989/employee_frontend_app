import { createSelector, createFeatureSelector } from '@ngrx/store';
import { EmployeesStateInterface } from './employees.reducer';

export const employeeState =
  createFeatureSelector<EmployeesStateInterface>('employees');

export const isLoadingSelector = createSelector(
  employeeState,
  (state) => state.loading
);
export const getEmployeesSelector = createSelector(
  employeeState,
  (state) => state.employees
);
export const errorSelector = createSelector(
  employeeState,
  (state) => state.error
);
