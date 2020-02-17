import { Component, OnInit } from '@angular/core';
import { HomeService } from '../home/home.service';
import { NoticiaInterface } from '../components/noticia/noticia.component';
import { Router } from '@angular/router';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'leer-noticia-root',
  templateUrl: './leer-noticia.component.html',
  styleUrls: ['./leer-noticia.component.scss']
})
export class LeerNoticiaComponent implements OnInit{

	public noticia: NoticiaInterface;
	constructor(private readonly homeService: HomeService, private readonly router: Router, private readonly sanitizer: DomSanitizer){}

	ngOnInit(): void {
		if(this.homeService.noticiaSeleccionadaParaLeer.noticia){
			this.noticia = this.homeService.noticiaSeleccionadaParaLeer.noticia;
		}else{
			this.router.navigate(['home'])
		}
	}

	public volver(){
		this.router.navigate([this.homeService.noticiaSeleccionadaParaLeer.url])
	}

	public imagenNoticia(base64: string): SafeResourceUrl{
		return this.sanitizer.bypassSecurityTrustResourceUrl('data:image/jpg;base64,' + base64);
	}

	public urlExterna(url: string){
		window.open(url, "_blank");
	}
}
