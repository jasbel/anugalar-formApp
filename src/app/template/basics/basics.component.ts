import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-basics',
  templateUrl: './basics.component.html',
  styles: [],
})
export class BasicsComponent implements OnInit {
  @ViewChild('miFormulario') miFormulario!: NgForm;

  initForm = {
    producto: 'rtc 4080',
    precio: 10,
    existencias: 10,
  };

  constructor() {}

  ngOnInit(): void {}

  guardar() {
    console.log('work', this.miFormulario);

    this.miFormulario.resetForm({
      precio: 0,
      existencias: 0,
    });
  }

  validate(name: any): boolean {
    return (
      this.miFormulario?.controls[name]?.invalid &&
      this.miFormulario?.controls[name]?.touched
    );
  }

  precioValido(): boolean {
    return (
      this.miFormulario?.controls['precio']?.value < 0 &&
      this.miFormulario?.controls['precio']?.touched
    );
  }
}
