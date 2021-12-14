import { Component, Input } from '@angular/core';
import { Vtuber } from '../../interfaces/hololive.interface';

@Component({
  selector: 'app-tarjeta-personaje',
  templateUrl: './tarjeta-personaje.component.html',
  styles: [
    `
      button:hover {
        background-color: #c2185b;
      }
    `,
  ],
})
export class TarjetaPersonajeComponent {
  @Input() pers!: Vtuber;
}
