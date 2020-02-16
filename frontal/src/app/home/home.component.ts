import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { HomeService } from './home.service';
import { PUBLISHER, NoticiaInterface } from '../components/noticia/noticia.component';

@Component({
  selector: 'home-root',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
	public noticias: NoticiaInterface[] = [];
	constructor(private readonly router: Router, private readonly homeService: HomeService, private readonly activatedRoute: ActivatedRoute) {
		// router.events.subscribe((val) => {
		// 	this.obtenerNoticias(activatedRoute.data)
		// });
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
}
