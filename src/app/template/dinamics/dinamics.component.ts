import { Component, OnInit } from '@angular/core';

interface Persona {
  nombre: string;
  favoritos: Favorito[];
}

interface Favorito {
  id: number;
  nombre: string;
}

@Component({
  selector: 'app-dinamics',
  templateUrl: './dinamics.component.html',
  styles: [],
})
export class DinamicsComponent {
  nuevoJuego: string = '';
  persona: Persona = {
    nombre: 'fernando',
    favoritos: [
      { id: 1, nombre: 'metal gear' },
      { id: 2, nombre: 'DeatStrading' },
    ],
  };
  guardar() {
    console.log('formujlario posteado');
  }
  eliminar(i: number) {
    this.persona.favoritos.splice(i, 1);
  }
  agregarJuego() {
    this.persona.favoritos.push({
      id: this.persona.favoritos.length,
      nombre: this.nuevoJuego,
    });

    this.nuevoJuego = '';
  }
}
