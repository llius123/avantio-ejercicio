import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

//Componentes
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

//Modulos
import { NavegacionIzquierdaModule } from './components/navegacion-izquierda/navegacion-izquierda.module';
import { ComponentModule } from './components/components.module';
import { HomeModule } from './home/home.module';
import { NoticiaModule } from './components/noticia/noticia.module';

@NgModule({
  declarations: [
	AppComponent
  ],
  imports: [
    BrowserModule,
	AppRoutingModule,
	ComponentModule,
	HomeModule,
	NoticiaModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
