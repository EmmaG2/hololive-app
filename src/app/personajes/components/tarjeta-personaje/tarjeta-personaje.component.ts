import { Component, Input } from '@angular/core';
import { Vtuber } from '../../interfaces/hololive.interface';

@Component({
  selector: 'app-tarjeta-personaje',
  templateUrl: './tarjeta-personaje.component.html',
  styles: [
  ]
})
export class TarjetaPersonajeComponent   {

  @Input() pers!:Vtuber;

}
