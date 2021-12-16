import { Component, OnInit } from '@angular/core';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { Vtuber } from '../../interfaces/hololive.interface';
import { VtubersService } from '../../services/vtubers.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styles: [
  ]
})
export class BuscarComponent implements OnInit {
  termino: string = '';
  dosb: Vtuber[] = [];
  personajeSeleccionado?:Vtuber | undefined;
  condicion:boolean = false;

  constructor(private vtubersService: VtubersService) {}

  ngOnInit(): void {}

  buscando() {
    this.vtubersService
      .getSugerencias(this.termino.trim())
      .subscribe((personajes) => (this.dosb = personajes));
  };

  opcionSeleccionada(event: MatAutocompleteSelectedEvent) {

    if (!event.option.value) {
      this.personajeSeleccionado = undefined;
      this.condicion = true;
      return;
    }

    const vtuber:any = event.option.value;
    this.termino = vtuber.vtuber.name.en;

    this.vtubersService.getPersonajePorId( vtuber.id )
    .subscribe( personaje => this.personajeSeleccionado = personaje)

  }

}
