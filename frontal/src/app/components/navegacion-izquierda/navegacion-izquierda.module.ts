import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NavegacionIzquierdaHomeComponent } from './navegacion-izquierda-home/navegacion-izquierda-home.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NavegacionIzquierdaNoticiaComponent } from './navegacion-izquierda-noticia/navegacion-izquierda-noticia.component';


@NgModule({
  declarations: [
	NavegacionIzquierdaHomeComponent,
	NavegacionIzquierdaNoticiaComponent
  ],
  imports: [
	CommonModule,
	BrowserModule,
	RouterModule
  ],
  exports: [
	  NavegacionIzquierdaHomeComponent,
	  NavegacionIzquierdaNoticiaComponent
  ]
})
export class NavegacionIzquierdaModule { }
