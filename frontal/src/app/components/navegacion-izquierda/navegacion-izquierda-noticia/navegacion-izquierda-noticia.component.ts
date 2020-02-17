import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'navegacion-izquierda-noticia',
  templateUrl: './navegacion-izquierda-noticia.component.html',
  styleUrls: ['./navegacion-izquierda-noticia.component.scss']
})
export class NavegacionIzquierdaNoticiaComponent implements OnInit{

	constructor(private readonly router: Router){}

	ngOnInit(): void {}

	public cargarNoticias(periodico: string){
		switch (periodico) {
			case 'mundo':
				this.router.navigate(['home', 'mundo'])
				break;
			case 'pais':
				this.router.navigate(['home','pais'])
				break;
		}
	}
}
