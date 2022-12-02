import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeListRoutingModule } from './employee-list-routing.module';
import { EmployeeListComponent } from './employee-list.component';
import { StoreModule } from '@ngrx/store';
import { ReducerEmployees } from 'src/app/components/employee-list/store/employees.reducer';
import { EffectsModule } from '@ngrx/effects';
import { EmployeeEffects } from 'src/app/components/employee-list/store/employees.effects';
import { LoadingModule } from '../shared/loading/loading.module';

@NgModule({
  declarations: [EmployeeListComponent],
  imports: [
    CommonModule,
    EmployeeListRoutingModule,
    LoadingModule,
    StoreModule.forFeature('employees', ReducerEmployees),
    EffectsModule.forFeature([EmployeeEffects]),
  ],
})
export class EmployeeListModule {}
