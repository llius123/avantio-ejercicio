import { ComponentModule } from './../components/components.module';
import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { NavegacionIzquierdaModule } from '../components/navegacion-izquierda/navegacion-izquierda.module';
import { HomeService } from './home.service';
import { NoticiaComponent } from '../components/noticia/noticia.component';
import { NoticiaModule } from '../components/noticia/noticia.module';
import { HttpClientModule } from '@angular/common/http';
import { FechaComponent } from '../components/fecha/fecha.component';
import { EditarCrearNoticiaModule } from '../components/editar-crear-noticia/editar-crear-noticia.module';

@NgModule({
  declarations: [
	  HomeComponent
  ],
  imports: [
	  NavegacionIzquierdaModule,
	  NoticiaModule,
	  HttpClientModule,
	  ComponentModule,
	  EditarCrearNoticiaModule
  ],
  providers: [HomeService],
})
export class HomeModule { }
