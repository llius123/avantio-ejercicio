import { Component, Input } from '@angular/core';
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

	constructor(private sanitizer: DomSanitizer){}


	public transformarImagen(base64: string): SafeResourceUrl{
		return this.sanitizer.bypassSecurityTrustResourceUrl('data:image/jpg;base64,' + base64);
	}
}
