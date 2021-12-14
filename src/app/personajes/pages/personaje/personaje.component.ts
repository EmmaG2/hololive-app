import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { Vtuber } from '../../interfaces/hololive.interface';
import { VtubersService } from '../../services/vtubers.service';

@Component({
  selector: 'app-personaje',
  templateUrl: './personaje.component.html',
  styleUrls: ['./personaje.component.css']
})
export class PersonajeComponent implements OnInit {

  pers!:Vtuber;

  constructor( private activatedRoute:ActivatedRoute,
               private vtuberService:VtubersService,
               private router:Router) { }

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe( switchMap( ({id}) => this.vtuberService.getPersonajePorId(id) ) )
      .subscribe( pers => this.pers = pers );
  };

  regresar() {
    this.router.navigate(['personajes/listado'])
  };

}
