import {Noticia, NoticiaInterface, noticiaSchema } from './noticias.model';


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
	const resp = Noticia.findOneAndUpdate(
		{_id: noticia.id},
		{$set: {
			title: noticia.title,
			body: noticia.body,
			image: noticia.image,
			url: noticia.url,
			publisher: noticia.publisher
		}},
		{new:true})
		.then(
			(docs)=>{
				if(docs){
					return docs.toObject({getters: true});
				}else{
					throw {msg: 'Fallo al actualizar', error: null, codigo: 400};
				}
			},
			(error) => {
				throw {msg: 'Fallo al actualizar', error: error, codigo: 400};
			}
		)
		return resp;
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