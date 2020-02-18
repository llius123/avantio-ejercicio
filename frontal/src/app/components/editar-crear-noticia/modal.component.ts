import { Component, ElementRef, Input, OnInit, OnDestroy } from "@angular/core";
import { ModalService } from "./modal.service";
import { trigger, transition, state, animate, style } from "@angular/animations";
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { HomeService } from 'src/app/home/home.service';
import { NoticiaInterface } from '../noticia/noticia.component';

@Component({
	selector: "ve-modal",
	templateUrl: "./modal.component.html",
	styleUrls: ["./modal.component.scss"],
	animations: [
		trigger("cambiarTamañoDivFormulario", [
			state(
				"iniciado",
				style({
					width: "0px"
				})
			),
			state(
				"final",
				style({
					width: "30%"
				})
			),
			transition("iniciado=>final", animate("500ms")),
			transition("final=>iniciado", animate("1000ms"))
		])
	]
})
export class ModalComponent implements OnInit, OnDestroy {
	estadoDelModal = "iniciado";

	@Input() id: string;
	@Input() noticia: NoticiaInterface;
	private element: any;
	public formulario: FormGroup;
	constructor(public modalService: ModalService, private el: ElementRef, private readonly router: Router, private homeService: HomeService) {
		this.element = el.nativeElement;
	}
	ngOnInit() {
		const modal = this; // Nos aseguramos de que tenga un ID
		if (!this.id) {
			console.error("modal must have an id");
			return;
		}
		// Se mueve el elemento al final de la pagina (justo antes del cierre del body), para que pueda ser mostrado encima de todo
		document.body.appendChild(this.element);
		// Cierre de modal haciendo clock en cualquier parte del background
		this.element.addEventListener("click", (e: any) => {
			if (e.target.className === "ve-modal") {
				modal.close();
			}
		});
		this.modalService.add(this);

		if(this.noticia){
			//Inicializop el formulario
			this.formulario = new FormGroup({
				_id: new FormControl(this.noticia._id),
				url: new FormControl(this.noticia.url),
				title: new FormControl(this.noticia.title),
				body: new FormControl(this.noticia.body),
				image: new FormControl(this.noticia.image),
				publisher: new FormControl(this.noticia.publisher)
			});
		}else{
			//Inicializop el formulario
			this.formulario = new FormGroup({
				_id: new FormControl(),
				url: new FormControl(),
				title: new FormControl(),
				body: new FormControl(),
				image: new FormControl(),
				publisher: new FormControl()
			});
		}
	}
	ngOnDestroy(): void {
		this.modalService.remove(this.id);
		this.element.remove();
	}
	open(): void {
		this.estadoDelModal = "final";
		this.element.style.display = "block";
		document.body.classList.add("ve-modal-open");
	}
	close() {
		this.formulario.reset();
		this.estadoDelModal = "iniciado";
		this.element.style.display = "none";
		document.body.classList.remove("ve-modal-open");
	}

	//Copiado literalmente de https://stackblitz.com/edit/angular-7-image-upload?file=src%2Fapp%2Fapp.component.html
	imageUrl: any = '';
	editFile: boolean = true;
	removeUpload: boolean = false;
	uploadFile(event) {
		let reader = new FileReader(); // HTML5 FileReader API
		let file = event.target.files[0];
		if (event.target.files && event.target.files[0]) {
			reader.readAsDataURL(file);
		  // When file uploads set it to file formcontrol
			reader.onload = () => {
			this.imageUrl = reader.result;
			this.formulario.patchValue({
				image: reader.result
			});
			this.editFile = false;
			this.removeUpload = true;
			}
		}
	}

	guardar() {
		if(!this.formulario.get('publisher').value){
			this.obtenerPublisherPorUrl()
		}
		if(this.formulario.get('_id').value){
			this.modalService.editarNotica(this.formulario.getRawValue()).subscribe(
				resp => {
					this.homeService.noticiaEditada.emit(resp);
					this.close();
				})
		}else{
			this.modalService.guardarNuevaNoticia(this.formulario.getRawValue()).subscribe(
				resp => {
					this.homeService.nuevaNoticia.emit(resp);
					this.close();
				})
		}
	}

	obtenerPublisherPorUrl(){
		const url = this.router.url;
		if(url.includes('mundo')){
			this.formulario.patchValue({
				publisher: 'mundo'
			})
		}else{
			this.formulario.patchValue({
				publisher: 'pais'
			})
		}
	}
}