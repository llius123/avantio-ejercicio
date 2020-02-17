import { Injectable } from '@angular/core';
@Injectable({
	providedIn: 'root'
})
export class EditarCrearNoticiaService {
	private modals: any[] = [];
	private modalActiva: any;
	constructor() {}
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
}