import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';
import { User } from '../../user';

@Component({
  selector: 'app-register-customer-form',
  template: `
    <div class="space-y-5">
      <div class="text-xl font-semibold text-center mb-1">Register</div>
      <form
        class="employee-form"
        autocomplete="off"
        [formGroup]="userForm"
        (ngSubmit)="submitForm()"
        class="space-y-5"
      >
        <input
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-stone-700 focus:border-stone-700 block w-full p-2.5"
          type="text"
          id="name"
          formControlName="name"
          placeholder="Name"
          required
        />

        <div
          *ngIf="name.invalid && (name.dirty || name.touched)"
        >
          <div *ngIf="name.errors?.['required']">
            <div
              id="alert-2"
              class="flex items-center text-red-600 "
              role="alert"
            >
              <svg
                class="flex-shrink-0 w-4 h-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"
                />
              </svg>
              <span class="sr-only">Info</span>
              <div class="ms-3 text-sm font-medium">Name is required!</div>
            </div>
          </div>
        </div>

        <input
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-stone-700 focus:border-stone-700 block w-full p-2.5"
          type="text"
          id="username"
          formControlName="username"
          placeholder="Username"
          required
        />

        <div
          *ngIf="username.invalid && (username.dirty || username.touched)"
        >
          <div *ngIf="username.errors?.['required']">
            <div
              id="alert-2"
              class="flex items-center p-1 mb-1 text-red-600"
              role="alert"
            >
              <svg
                class="flex-shrink-0 w-4 h-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"
                />
              </svg>
              <span class="sr-only">Info</span>
              <div class="ms-3 text-sm font-medium">Username is required!</div>
            </div>
          </div>
        </div>

        <input
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-stone-700 focus:border-stone-700 block w-full p-2.5"
          type="email"
          id="email"
          formControlName="email"
          placeholder="Email"
          required
        />

        <div
          *ngIf="email.invalid && (email.dirty || email.touched)"
        >
          <div *ngIf="email.errors?.['required']">
            <div
              id="alert-2"
              class="flex items-center p-1 mb-1 text-red-600 "
              role="alert"
            >
              <svg
                class="flex-shrink-0 w-4 h-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"
                />
              </svg>
              <span class="sr-only">Info</span>
              <div class="ms-3 text-sm font-medium">Email is required!</div>
            </div>
          </div>

          <div *ngIf="email.errors?.['email']">
            <div
              id="alert-2"
              class="flex items-center p-1 mb-1 text-red-600 "
              role="alert"
            >
              <svg
                class="flex-shrink-0 w-4 h-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"
                />
              </svg>
              <span class="sr-only">Info</span>
              <div class="ms-3 text-sm font-medium">Email must be valid!</div>
            </div>
          </div>
        </div>

        <input
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-stone-700 focus:border-stone-700 block w-full p-2.5"
          type="password"
          id="password"
          formControlName="password"
          placeholder="Password"
          minlength="8"
          required
        />

        <div
          *ngIf="password.invalid && (password.dirty || password.touched)"
        >
          <div *ngIf="password.errors?.['required']">
            <div
              id="alert-2"
              class="flex items-center p-1 text-red-600 "
              role="alert"
            >
              <svg
                class="flex-shrink-0 w-4 h-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"
                />
              </svg>
              <span class="sr-only">Info</span>
              <div class="ms-3 text-sm font-medium">Password is required!</div>
            </div>
          </div>

          <div *ngIf="password.errors?.['minlength']">
            <div
              id="alert-2"
              class="flex items-center p-1 text-red-600 "
              role="alert"
            >
              <svg
                class="flex-shrink-0 w-4 h-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"
                />
              </svg>
              <span class="sr-only">Info</span>
              <div class="ms-3 text-sm font-medium leading-loose">
                Password must be at least 8 characters!
              </div>
            </div>
          </div>
        </div>
        <div class="flex justify-center mt-5">
        <button
          class="text-white bg-stone-700 hover:bg-stone-800 focus:ring-4 focus:ring-stone-700 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-stone-700 dark:hover:bg-stone-800 focus:outline-none dark:focus:ring-stone-900"
          type="submit"
          [disabled]="userForm.invalid"
          [class.disabled]="userForm.invalid"
        >
          Register
        </button>
      </div>
      </form>
    </div>
  `,
})
export class RegisterCustomerFormComponent implements OnInit {
  @Input()
  initialState: BehaviorSubject<User> = new BehaviorSubject({});

  @Output()
  formValuesChanged = new EventEmitter<User>();

  @Output()
  formSubmitted = new EventEmitter<User>();

  userForm: FormGroup = new FormGroup({});

  constructor(private fb: FormBuilder) {}

  get name() {
    return this.userForm.get('name')!;
  }
  get username() {
    return this.userForm.get('username')!;
  }
  get email() {
    return this.userForm.get('email')!;
  }
  get password() {
    return this.userForm.get('password')!;
  }

  ngOnInit() {
    this.initialState.subscribe((user) => {
      this.userForm = this.fb.group({
        name: ['', [Validators.required]],
        username: ['', [Validators.required]],
        email: ['', Validators.compose([Validators.required, Validators.email])],
        password: [
          '',
          [Validators.required, Validators.minLength(8)],
        ],
      });
    });

    this.userForm.valueChanges.subscribe((val) => {
      this.formValuesChanged.emit(val);
    });
  }

  submitForm() {
    this.formSubmitted.emit(this.userForm.value);
  }
}
