import Noticia, { NoticiaInterface, noticiaSchema } from './noticias.model';
import mongoose from 'mongoose';


//Añado la noticia a la base de datos
export async function createNoticia(noticia: NoticiaInterface) {
	let nuevaNoticia = new Noticia(noticia);
	const resp: NoticiaInterface = await nuevaNoticia.save().then(
		(resp) =>{
			return resp.toObject({getters: true})
		}, 
		error => {
			throw {msg: 'Error guardando una noticia', error: error, codigo: 400};
		})
	return resp;
}