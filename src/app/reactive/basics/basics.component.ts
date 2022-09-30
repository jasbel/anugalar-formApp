import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';

interface IForm {
  nombre: string;
  precio: string;
  existencias: string;
}

interface IValidationErrors {
  required: boolean;
  min: { min: number; actual: number };
}

const getMax = (field: keyof IForm, n: number) => {
  return `El precio debe de ser mayor a ${n}`;
};

@Component({
  selector: 'app-basics',
  templateUrl: './basics.component.html',
  styles: [],
})
export class BasicsComponent {
  myForm: FormGroup = this.fb.group({
    nombre: ['RTC 898989', [Validators.required, Validators.minLength(3)]],
    precio: [
      1500,
      [Validators.required, Validators.min(10), Validators.minLength(3), Validators.max(5000), Validators.maxLength(3)],
    ],
    existencias: [5],
  });

  constructor(private fb: FormBuilder) {}

  fieldIsValid(field: keyof IForm) {
    return this.myForm.controls[field].errors && this.myForm.controls[field].touched;
  }

  fieldViewError(field: keyof IForm) {
    const v: ValidationErrors = {};
    return JSON.stringify(this.myForm.controls[field].errors);
  }
}
