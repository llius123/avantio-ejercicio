import { ComponentModule } from './../components/components.module';
import { NgModule } from '@angular/core';
import { NavegacionIzquierdaComponent } from '../components/navegacion-izquierda/navegacion-izquierda.component';
import { HomeComponent } from './home.component';
import { NavegacionIzquierdaModule } from '../components/navegacion-izquierda/navegacion-izquierda.module';
import { HomeService } from './home.service';
import { NoticiaComponent } from '../components/noticia/noticia.component';
import { NoticiaModule } from '../components/noticia/noticia.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
	  HomeComponent
  ],
  imports: [
	  ComponentModule,
	  NavegacionIzquierdaModule,
	  NoticiaModule,
	  HttpClientModule
  ],
  providers: [HomeService],
})
export class HomeModule { }
