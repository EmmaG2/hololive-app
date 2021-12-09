//! Modulos de angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//* componentes creados
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';



@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AuthModule { }
