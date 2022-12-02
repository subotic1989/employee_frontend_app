import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IEmployee } from 'src/app/models/employee.interface';
import * as actions from './store/employees.actions';
import * as selectors from './store/employees.selectors';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss'],
})
export class EmployeeListComponent implements OnInit {
  public isLoading$: Observable<boolean>;
  public employeesArray$: Observable<IEmployee[]>;
  public error$: Observable<string | null>;

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(actions.getAllEmployees());
    this.initData();
  }

  initData(): void {
    this.isLoading$ = this.store.pipe(select(selectors.isLoadingSelector));
    this.employeesArray$ = this.store.pipe(
      select(selectors.getEmployeesSelector)
    );
    this.error$ = this.store.pipe(select(selectors.errorSelector));

    // this.employeeService.getAllEmployees().subscribe((employees: any[]) => {
    //   this.employeesArray = employees.sort(
    //     (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
    //   );
    // });
  }
}
