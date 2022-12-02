import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeAddRoutingModule } from './employee-add-routing.module';
import { EmployeeAddComponent } from './employee-add.component';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { ReducerEmployee } from './store/employee.reducer';
import { EffectsModule } from '@ngrx/effects';
import { EmployeeEffects } from './store/employee.effects';

@NgModule({
  declarations: [EmployeeAddComponent],
  imports: [
    CommonModule,
    EmployeeAddRoutingModule,
    ReactiveFormsModule,
    StoreModule.forFeature('employee', ReducerEmployee),
    EffectsModule.forFeature([EmployeeEffects]),
  ],
})
export class EmployeeAddModule {}
