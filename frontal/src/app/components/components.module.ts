import { NgModule } from "@angular/core";
import { NavegacionIzquierdaModule } from './navegacion-izquierda/navegacion-izquierda.module';
import { NoticiaModule } from './noticia/noticia.module';

@NgModule({
	declarations: [],
	imports: [NavegacionIzquierdaModule, NoticiaModule],
	providers: []
})
export class ComponentModule {}