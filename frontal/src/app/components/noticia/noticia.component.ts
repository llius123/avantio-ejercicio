import { Component, Input, Output, EventEmitter } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

export interface NoticiaInterface {
	_id: string,
	title: string,
	body: string,
	image: string,
	url: string,
	publisher: PUBLISHER
}
export enum PUBLISHER {
	PAIS = 'pais',
	MUNDO = 'mundo'
}

@Component({
  selector: 'noticia',
  templateUrl: './noticia.component.html',
  styleUrls: ['./noticia.component.scss']
})
export class NoticiaComponent {

	@Input() noticias: NoticiaInterface[];

	@Output() noticiaSeleccionada: EventEmitter<NoticiaInterface> = new EventEmitter<NoticiaInterface>();

	constructor(private sanitizer: DomSanitizer){}


	public transformarImagen(base64: string): SafeResourceUrl{
		if(base64.includes('data:image')){
			return this.sanitizer.bypassSecurityTrustResourceUrl(base64);
		}else{
			return this.sanitizer.bypassSecurityTrustResourceUrl('data:image/jpg;base64,' + base64);
		}
	}

	public seleccionarNoticiaParaLeer(noticia: NoticiaInterface){
		this.noticiaSeleccionada.emit(noticia);
	}
}
