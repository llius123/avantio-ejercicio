import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LeerNoticiaComponent } from './leer-noticia.component';
import { NavegacionIzquierdaModule } from '../components/navegacion-izquierda/navegacion-izquierda.module';
import { HomeService } from '../home/home.service';
import { FechaComponent } from '../components/fecha/fecha.component';
import { ComponentModule } from '../components/components.module';
import { ModalModule } from '../components/editar-crear-noticia/modal.module';

@NgModule({
  declarations: [
	LeerNoticiaComponent
  ],
  imports: [
	BrowserModule,
	NavegacionIzquierdaModule,
	ComponentModule,
	ModalModule
  ],
  providers: [HomeService]
})
export class LeerNoticiaModule { }
