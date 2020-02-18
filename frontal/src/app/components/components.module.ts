import { NgModule } from "@angular/core";
import { NavegacionIzquierdaModule } from './navegacion-izquierda/navegacion-izquierda.module';
import { NoticiaModule } from './noticia/noticia.module';
import { FechaComponent } from './fecha/fecha.component';
import { ModalModule } from './editar-crear-noticia/modal.module';

@NgModule({
	declarations: [FechaComponent],
	imports: [NavegacionIzquierdaModule, NoticiaModule, ModalModule],
	exports: [FechaComponent],
	providers: []
})
export class ComponentModule {}