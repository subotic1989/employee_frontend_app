import { createSelector, createFeatureSelector } from '@ngrx/store';
import { EmployeeStateInterface } from './employee.reducer';

export const employeeState =
  createFeatureSelector<EmployeeStateInterface>('employee');

export const isLoadingSelector = createSelector(
  employeeState,
  (state) => state.loading
);
export const getEmployeeSelector = createSelector(
  employeeState,
  (state) => state.employee
);
export const errorSelector = createSelector(
  employeeState,
  (state) => state.error
);
