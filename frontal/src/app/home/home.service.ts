import { EventEmitter, OnInit } from "@angular/core";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { NoticiaInterface, PUBLISHER } from '../components/noticia/noticia.component';
import { environment } from 'src/environments/environment';

@Injectable({
	providedIn: "root"
})
export class HomeService {

	constructor(private httpClient: HttpClient) {}

	public obtenerNoticiasFiltroPublisher(publisher: PUBLISHER): Observable<NoticiaInterface[]>{
		return this.httpClient.get<NoticiaInterface[]>(environment.apiPath + 'noticias/' + publisher);
	}
}