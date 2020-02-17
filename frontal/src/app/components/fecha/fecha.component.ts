import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fecha',
  templateUrl: './fecha.component.html',
  styleUrls: ['./fecha.component.scss']
})
export class FechaComponent implements OnInit{

	public fecha: string;
	constructor(){}

	ngOnInit(): void {
		const fecha = new Date()
		this.fecha = `${fecha.getDate()} ${fecha.toLocaleString('default', { month: 'long' })} ${fecha.getFullYear()}`
	}
}
