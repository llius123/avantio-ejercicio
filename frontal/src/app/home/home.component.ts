import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { HomeService } from './home.service';
import { PUBLISHER, NoticiaInterface } from '../components/noticia/noticia.component';
import { ModalService } from '../components/editar-crear-noticia/modal.service';

@Component({
  selector: 'home-root',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
	public noticias: NoticiaInterface[] = [];
	constructor(private readonly router: Router, private homeService: HomeService, private readonly activatedRoute: ActivatedRoute, private readonly modalService: ModalService) {
		this.homeService.nuevaNoticia.subscribe(noticia => {
			this.noticias.push(noticia)
		})
	}

	ngOnInit(): void {
		this.obtenerNoticias()
	}

	public async obtenerNoticias(){
		await this.activatedRoute.data .subscribe(
			resp => {
				this.homeService.obtenerNoticiasFiltroPublisher(resp.publisher).subscribe(
					resp =>{
						this.noticias = resp;
					},
					error => {
						//TODO
					}
				)
			}
		)
	}
	public noticiaSeleccionada(noticia: NoticiaInterface){
		this.homeService.noticiaSeleccionadaParaLeer.noticia = noticia;
		this.homeService.noticiaSeleccionadaParaLeer.url = this.router.url;
		this.router.navigate(['noticia'])
	}
	public openModal(){
		this.modalService.open('home')
	}
}
