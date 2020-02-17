import { NgModule } from "@angular/core";
import { NavegacionIzquierdaModule } from './navegacion-izquierda/navegacion-izquierda.module';
import { NoticiaModule } from './noticia/noticia.module';
import { FechaComponent } from './fecha/fecha.component';
import { EditarCrearComponent } from './editar-crear-noticia/editar-crear-noticia.component';
import { EditarCrearNoticiaModule } from './editar-crear-noticia/editar-crear-noticia.module';

@NgModule({
	declarations: [FechaComponent],
	imports: [NavegacionIzquierdaModule, NoticiaModule, EditarCrearNoticiaModule],
	exports: [FechaComponent],
	providers: []
})
export class ComponentModule {}