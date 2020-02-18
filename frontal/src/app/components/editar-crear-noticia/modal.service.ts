import { Injectable } from "@angular/core";
import { NoticiaInterface } from '../noticia/noticia.component';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
@Injectable({
	providedIn: "root"
})
export class ModalService {
	private modals: any[] = [];
	private modalActiva: any;
	constructor(private readonly httpClient: HttpClient) {}
	add(modal: any) {
		// add modal to array of active modals
		this.modals.push(modal);
	}
	remove(id: string) {
		// remove modal from array of active modals
		this.modals = this.modals.filter(x => x.id !== id);
	}
	open(id: string) {
		// open modal specified by id
		const modal: any = this.modals.filter(x => x.id === id)[0];
		this.modalActiva = modal;
		modal.open();
	}
	closeById(id: string) {
		// close modal specified by id
		const modal: any = this.modals.filter(x => x.id === id)[0];
		delete this.modalActiva;
		modal.close();
	}
	close() {
		this.closeById(this.modalActiva.id);
	}

	guardarNuevaNoticia(noticia: NoticiaInterface): Observable<NoticiaInterface>{
		return this.httpClient.post<NoticiaInterface>(environment.apiPath + 'noticias', noticia)
	}

	editarNotica(noticia: NoticiaInterface): Observable<NoticiaInterface>{
		return this.httpClient.put<NoticiaInterface>(environment.apiPath + 'noticias', noticia)
	}
}
