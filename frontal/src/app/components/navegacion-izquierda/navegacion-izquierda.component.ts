import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'navegacion-izquierda',
  templateUrl: './navegacion-izquierda.component.html',
  styleUrls: ['./navegacion-izquierda.component.scss']
})
export class NavegacionIzquierdaComponent implements OnInit{

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
