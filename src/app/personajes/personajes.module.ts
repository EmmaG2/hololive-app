//! Angular Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//? Material Modules
import { FlexLayoutModule } from '@angular/flex-layout';

//? Modulos
import { FormsModule } from '@angular/forms';
import { personajesRoutingModule } from './personajes-routing.module';
import { MaterialModule } from '../material/material.module';

//* componentes
import { AgregarComponent } from './pages/agregar/agregar.component';
import { BuscarComponent } from './pages/buscar/buscar.component';
import { ListadoComponent } from './pages/listado/listado.component';
import { PersonajeComponent } from './pages/personaje/personaje.component';
import { PersonajesHomeComponent } from './pages/personajes-home/personajes-home.component';
import { TarjetaPersonajeComponent } from './components/tarjeta-personaje/tarjeta-personaje.component';
import { FooterComponent } from './components/footer/footer.component';
import { ImagenesPipe } from './pipes/imagenes.pipe';

@NgModule({
  declarations: [
    AgregarComponent,
    BuscarComponent,
    ListadoComponent,
    PersonajeComponent,
    PersonajesHomeComponent,
    TarjetaPersonajeComponent,
    FooterComponent,
    ImagenesPipe
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    personajesRoutingModule,
    FormsModule,
    MaterialModule
  ]
})
export class PersonajesModule { }
