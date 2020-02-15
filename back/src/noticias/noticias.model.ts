// const mongoose = require("mongoose");
import mongoose from 'mongoose';
import { Validators, ValidationChain } from 'express-validator/src/chain';

export const noticiaSchema = new mongoose.Schema({
  id:{
	  type: String
  },
  title: {
    type: String
  },
  body: {
    type: String
  },
  image: {
	type: String
  },
  url: {
    type: String
  },
  publisher: {
	type: String,
	enum: ['pais', 'mundo'],
	default: 'pais'
  }
});

export interface NoticiaInterface {
	id: string,
	title: string,
	body: string,
	image: string,
	url: string,
	publisher: ['pais', 'mundo']
}

let Noticia;
export default Noticia = mongoose.model("Noticia", noticiaSchema);

module.exports = Noticia;