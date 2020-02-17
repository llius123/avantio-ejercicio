import { NgModule } from "@angular/core";
import { EditarCrearComponent } from './editar-crear-noticia.component';
import { EditarCrearNoticiaService } from './editar-crear-noticia.service';

@NgModule({
	declarations: [EditarCrearComponent],
	imports: [],
	exports: [EditarCrearComponent],
	providers: [EditarCrearNoticiaService]
})
export class EditarCrearNoticiaModule {}