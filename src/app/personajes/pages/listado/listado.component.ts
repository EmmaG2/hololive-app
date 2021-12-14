import { Component, OnInit } from '@angular/core';
import { Vtuber } from '../../interfaces/hololive.interface';
import { VtubersService } from '../../services/vtubers.service';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {
  vtubers: Vtuber[] = [];

  constructor(private vtubersService: VtubersService) {}

  ngOnInit(): void {
    this.vtubersService
      .getPersonajes()
      .subscribe((vtuber) => (this.vtubers = vtuber));
  }
}
