import {Noticia, NoticiaInterface, noticiaSchema } from './noticias.model';
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

//Listo todas las noticias de un publisher
export async function getAllNoticiasByPublisher(publisher: string) {
	const resp: NoticiaInterface[] = await Noticia.find({publisher: publisher}).select({}).then(
		resp => {
			return JSON.parse(JSON.stringify(resp))
		}, 
		error => {
			throw {msg: 'Error guardando una noticia', error: error, codigo: 400};
		}
	)
	return resp;
}


//Updateo la noticia a la base de datos
export async function updateNoticia(noticia: NoticiaInterface) {
	let noticiaId: any = '';
	if(mongoose.isValidObjectId(noticia._id)){
		noticiaId = noticia._id;
	}else{
		noticiaId = mongoose.Types.ObjectId(noticia._id);
	}
	const noticiaAntigua = await Noticia.findOne({ _id: noticiaId });
	const update = { 
		_id: noticiaId,
		title: noticia.title,
		body: noticia.body,
		image: noticia.image,
		url: noticia.url,
		publisher: noticia.publisher
	};
	if(noticiaAntigua){
		await noticiaAntigua.updateOne(update);
	}
	const noticiaActualizada = await Noticia.find({_id: noticiaId})
	return noticiaActualizada;
}

//Eliminar noticia
export async function eliminarNoticia(id: string) {
	const resp = Noticia.deleteOne({_id: id})
		.then(
			(docs)=>{
				if(docs && docs['n'] !== 0){
					return docs;
				}else{
					throw {msg: 'Fallo al eliminar una noticia', error: null, codigo: 400};
				}
			},
			(error) => {
				throw {msg: 'Fallo al eliminar una noticia', error: error, codigo: 400};
			}
		)
	return resp;
}