import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NavegacionIzquierdaComponent } from './navegacion-izquierda.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
	NavegacionIzquierdaComponent
  ],
  imports: [
	CommonModule,
	BrowserModule,
	RouterModule
  ],
  exports: [
	  NavegacionIzquierdaComponent
  ]
})
export class NavegacionIzquierdaModule { }
