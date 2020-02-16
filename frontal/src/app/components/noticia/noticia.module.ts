import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NoticiaComponent } from './noticia.component';


@NgModule({
  declarations: [
	NoticiaComponent
  ],
  imports: [
	CommonModule,
	BrowserModule,
	RouterModule
  ],
  exports: [
	  NoticiaComponent
  ]
})
export class NoticiaModule { }
