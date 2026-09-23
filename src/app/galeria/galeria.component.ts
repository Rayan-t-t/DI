import { Component, OnInit } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import { User } from '../usuario';
import { Servicio } from '../servicio';

import { IonHeader,   IonContent, IonTitle, IonToolbar, IonLabel, IonItem, IonList } from '@ionic/angular';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonLabel, IonItem, IonList, CommonModule,NgFor],
})
export class GaleriaComponent  implements OnInit {
  public imagen:string = 'galeria de imagen ';
  public tituloImagen:string = 'Imagen de prueba';
  public rutaImagenLocal:string = 'assets/imagen.jpg';

  users: User[] = [];
  constructor(private usersService: Servicio) { }

  async ngOnInit() {
    this.users = await this.usersService.getUsuarios();
    console.log("prueba")
    console.log(this.users)
  }
}

