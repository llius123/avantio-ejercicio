import { Component, OnInit, Input, ElementRef } from '@angular/core';
import { EditarCrearNoticiaService } from './editar-crear-noticia.service';

@Component({
  selector: 'editar-crear-noticia',
  templateUrl: './editar-crear-noticia.component.html',
  styleUrls: ['./editar-crear-noticia.component.scss']
})
export class EditarCrearComponent implements OnInit{

	@Input() id: string;
	private element: any;
	constructor(public editarCrearNoticiaService: EditarCrearNoticiaService, private el: ElementRef) {
		this.element = el.nativeElement;
	}
	ngOnInit(): void {
	const modal = this;
	// Nos aseguramos de que tenga un ID
	if (!this.id) {
		console.error('modal must have an id');
		return;
	}
	// Se mueve el elemento al final de la pagina (justo antes del cierre del body), para que pueda ser mostrado encima de todo
	document.body.appendChild(this.element);
	// Cierre de modal haciendo clock en cualquier parte del background
	this.element.addEventListener('click', (e: any) => {
		if (e.target.className === 've-modal') {
			modal.close();
		}
		});
		this.editarCrearNoticiaService.add(this);
	}
	ngOnDestroy(): void {
		this.editarCrearNoticiaService.remove(this.id);
		this.element.remove();
	}
	open(): void {
		this.element.style.display = 'block';
		document.body.classList.add('ve-modal-open');
	}
	close(): void {
		this.element.style.display = 'none';
		document.body.classList.remove('ve-modal-open');
	}
}
