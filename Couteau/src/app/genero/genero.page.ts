import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-genero',
  templateUrl: './genero.page.html',
  styleUrls: ['./genero.page.scss'],
})
export class GeneroPage implements OnInit {

  nombre!: string;

  predecirGenero() {
    const genero = this.obtenerGeneroPorNombre(this.nombre);
    if (genero === 'masculino') {
      document.documentElement.style.setProperty('--color-destacado', 'blue');
    } else {
      document.documentElement.style.setProperty('--color-destacado', 'pink');
    }
  }
  obtenerGeneroPorNombre(nombre: string): string {
    const nombresMasculinos = ['Willie', 'Amadis', 'Juan', 'Pedro'];
    if (nombresMasculinos.includes(nombre)) {
      return 'masculino';
    } else {
      return 'femenino';
    }
  }
  constructor() { }


  ngOnInit() {
  }

}
