import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edad',
  templateUrl: './edad.page.html',
  styleUrls: ['./edad.page.scss'],
})
export class EdadPage implements OnInit {

  nombre!: string;
  edad!: number;
  mensaje!: string;
  imagen!: string;

  determinarEdad() {
    this.edad = this.obtenerEdadPorNombre(this.nombre);
    if (this.edad < 18 ) {
      this.mensaje = 'Eres joven';
      this.imagen = 'assets/img/jven.png';
    } else if (this.edad >= 36 && this.edad < 65) {
      this.mensaje = 'Eres adulto';
      this.imagen = 'assets/img/adult.png';
    } else {
      this.mensaje = 'Eres anciano';
      this.imagen = 'assets/img/anci.png';
    }
  }

  obtenerEdadPorNombre(nombre: string): number {
    const edades : { [key: string]: number} = { 
      Willie: 17,
      Amadis: 36,
      Juan: 70,
    };
    return edades[nombre] || 0; 
  }

  constructor() { }

  ngOnInit() {
  }

}
