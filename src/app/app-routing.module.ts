import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'employee-list',
    loadChildren: () =>
      import('./components/employee-list/employee-list.module').then(
        (m) => m.EmployeeListModule
      ),
  },
  {
    path: 'employee-add',
    loadChildren: () =>
      import('./components/employee-add/employee-add.module').then(
        (m) => m.EmployeeAddModule
      ),
  },
  {
    path: 'employee-edit/:employeeId',
    loadChildren: () =>
      import('./components/employee-add/employee-add.module').then(
        (m) => m.EmployeeAddModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
