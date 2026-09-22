import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.scss'],
  imports: [],
})
export class GaleriaComponent  implements OnInit {
  public imagen:string = 'galeria de imagen ';
  public tituloImagen:string = 'Imagen de prueba';
  public rutaImagenLocal:string = 'assets/imagen.jpg';

  constructor() { }

  ngOnInit() {}

}
