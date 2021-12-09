//! modulos de angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//* componentes creados
import { AgregarComponent } from './pages/agregar/agregar.component';
import { BuscarComponent } from './pages/buscar/buscar.component';
import { ListadoComponent } from './pages/listado/listado.component';
import { PersonajeComponent } from './pages/personaje/personaje.component';
import { PersonajesHomeComponent } from './pages/personajes-home/personajes-home.component';
import { personajesRoutingModule } from './personajes-routing.module';



@NgModule({
  declarations: [
    AgregarComponent,
    BuscarComponent,
    ListadoComponent,
    PersonajeComponent,
    PersonajesHomeComponent
  ],
  imports: [
    CommonModule,
    personajesRoutingModule
  ]
})
export class PersonajesModule { }
