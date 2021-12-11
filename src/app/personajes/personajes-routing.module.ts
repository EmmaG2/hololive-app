//! angular modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

//* page components
import { AgregarComponent } from './pages/agregar/agregar.component';
import { BuscarComponent } from './pages/buscar/buscar.component';
import { ListadoComponent } from './pages/listado/listado.component';
import { PersonajeComponent } from './pages/personaje/personaje.component';
import { PersonajesHomeComponent } from './pages/personajes-home/personajes-home.component';

const routes:Routes = [
  {
    path: '',
    component: PersonajesHomeComponent,
    children: [
      { path: 'agregar', component: AgregarComponent },
      { path: 'editar/:id', component: AgregarComponent },
      { path: 'buscar', component: BuscarComponent },
      { path: 'listado', component: ListadoComponent },
      { path: ':id', component: PersonajeComponent },
      { path: '**', redirectTo: 'listado'}
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild( routes )
  ],
  exports: [
    RouterModule
  ]
})
export class personajesRoutingModule { }
