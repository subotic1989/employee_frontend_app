import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  ValidatorFn,
  AbstractControl,
  FormControl,
} from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IEmployee } from 'src/app/models/employee.interface';
import * as actions from '../employee-add/store/employee.actions';
import * as selectors from '../employee-add/store/employee.selectors';

@Component({
  selector: 'app-employee-add',
  templateUrl: './employee-add.component.html',
  styleUrls: ['./employee-add.component.scss'],
})
export class EmployeeAddComponent implements OnInit {
  public form: FormGroup;
  public employeeId: string;

  private employee: IEmployee | null = {
    id: '',
    name: '',
    email: '',
    phone: '',
    department: '',
  };

  public isLoading$: Observable<boolean>;
  public employee$: Observable<IEmployee | null>;
  public error$: Observable<string | null>;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private store: Store
  ) {}

  ngOnInit(): void {
    this.isEdit();
    this.initForm();
  }

  isEdit(): void {
    this.route.params.subscribe((params: Params) => {
      this.employeeId = params['employeeId'];

      if (typeof params['employeeId'] === 'string') {
        this.store.dispatch(
          actions.getEmployee({ employeeId: this.employeeId })
        );

        this.updateData();

        this.employee$?.subscribe((employee: IEmployee | null) => {
          this.employee = employee;
          this.initForm();
        });
      }
    });
  }

  initForm(): void {
    this.form = this.fb.group({
      name: [
        this.employee?.name,
        { updateOn: 'change', validators: [Validators.required] },
      ],
      email: [
        this.employee?.email,
        { updateOn: 'change', validators: [Validators.required] },
      ],
      phone: [
        this.employee?.phone,
        { updateOn: 'change', validators: [Validators.required] },
      ],
      department: [
        this.employee?.department,
        { updateOn: 'change', validators: [Validators.required] },
      ],
    });
  }

  onSubmit(): void {
    if (this.employeeId) {
      this.store.dispatch(
        actions.updateEmployee({
          employeeId: this.employeeId,
          employeeRequest: this.form.value,
        })
      );
    } else {
      this.store.dispatch(
        actions.createEmployee({ employeeRequest: this.form.value })
      );
    }

    this.updateData();
  }

  onDelete(): void {
    this.store.dispatch(
      actions.deleteEmployee({ employeeId: this.employeeId })
    );
  }

  updateData(): void {
    this.isLoading$ = this.store.pipe(select(selectors.isLoadingSelector));
    this.employee$ = this.store.pipe(select(selectors.getEmployeeSelector));
    this.error$ = this.store.pipe(select(selectors.errorSelector));
  }
}
