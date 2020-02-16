// const mongoose = require("mongoose");
import mongoose from 'mongoose';

export const noticiaSchema = new mongoose.Schema({
  id:{
	  type: String
  },
  title: {
	type: String,
	required: [true, 'Titulo obligatorio']
  },
  body: {
	type: String,
	required: [true, 'Body obligatorio']
  },
  image: {
	type: String,
	required: [true, 'Imagen obligatorio']
  },
  url: {
	type: String,
	required: [true, 'URL obligatorio']
  },
  publisher: {
	type: String,
	enum: ['pais', 'mundo'],
	default: 'pais',
	required: [true, 'Publisher obligatorio']
  }
});

export interface NoticiaInterface {
	id: string,
	title: string,
	body: string,
	image: string,
	url: string,
	publisher: PUBLISHER
}
export enum PUBLISHER {
	PAIS = 'pais',
	MUNDO = 'mundo'
}

export const Noticia = mongoose.model("Noticia", noticiaSchema);