import express, { Request, Response } from 'express';
import * as noticiasService from './noticias.service';
import {check, validationResult, checkSchema,} from 'express-validator';
import {PUBLISHER} from './noticias.model';

const routerNoticias = express.Router();

//El esquema que voy a usar para validar el body de las peticiones POST
const SchemaValidatorBodyNoticiaCrear: any = {
	title: {
		isLength: {
			errorMessage: 'Titulo no puede estar vacio',
			options: {min: 1}
		}
	},
	body: {
		isLength: {
			errorMessage: 'Body no puede estar vacio',
			options: {min: 1}
		}
	},
	image: {
		isLength: {
			errorMessage: 'Imagen no puede estar vacio',
			options: {min: 1}
		}
	},
	url: {
		isLength: {
			errorMessage: 'Url no puede estar vacio',
			options: {min: 1}
		}
	},
	publisher: {
		matches: ['pais', 'mundo']
	} 
}

/**
 * POST
 * body: NoticiaInterface
 * validator: SchemaValidatorBodyNoticiaCrear
 * return: Noticia guardada en la bbdd
 */
export default routerNoticias.post('/', checkSchema(SchemaValidatorBodyNoticiaCrear) , async (req: Request, res: Response) => {
	const errors = validationResult(req);
	if (!errors.isEmpty()) {
		return res.status(422).json({ errors: errors.array() });
	}else{
		try {
			const resp = await noticiasService.createNoticia(req.body);
			res.send(resp)
		} catch (error) {
			res.status(400).send(error)
		}
	}
});

/**
 * GET
 * return: Lista todas las noticias filtradas por uin publisher
 */
routerNoticias.get('/:publisher', async (req: Request, res: Response) => {
	const publisher: string = req.params.publisher;
	if (publisher === PUBLISHER.MUNDO || publisher === PUBLISHER.PAIS) {
		try {
			const resp = await noticiasService.getAllNoticiasByPublisher(req.params.publisher)
			res.send(resp)
		} catch (error) {
			res.status(400).send(error)
		}
	}else{
		return res.status(422).json({ errors: 'Publisher incorrecto' });
	}
});


//El esquema que voy a usar para validar el body de las peticiones POST
const SchemaValidatorBodyNoticiaUpdate: any = {
	id: {
		isLength: {
			errorMessage: 'id no puede estar vacio',
			options: {min: 1}
		}
	},
	title: {
		isLength: {
			errorMessage: 'Titulo no puede estar vacio',
			options: {min: 1}
		}
	},
	body: {
		isLength: {
			errorMessage: 'Body no puede estar vacio',
			options: {min: 1}
		}
	},
	image: {
		isLength: {
			errorMessage: 'Imagen no puede estar vacio',
			options: {min: 1}
		}
	},
	url: {
		isLength: {
			errorMessage: 'Url no puede estar vacio',
			options: {min: 1}
		}
	},
	publisher: {
		matches: ['pais', 'mundo']
	} 
}
/**
 * PUT
 * return: Noticia actualizada
 */
routerNoticias.put('/',checkSchema(SchemaValidatorBodyNoticiaUpdate),  async (req: Request, res: Response) => {
	const errors = validationResult(req);
	if (!errors.isEmpty()) {
		return res.status(422).json({ errors: errors.array() });
	}else{
		try {
			const resp = await noticiasService.updateNoticia(req.body);
			res.send(resp)
		} catch (error) {
			res.status(400).send(error)
		}
	}
});

//El esquema que voy a usar para validar 
const SchemaValidatorBodyNoticiaDelete: any = {
	id: {
		in: ['params', 'query'],
		isLength: {
			errorMessage: 'id no puede estar vacio',
			options: {min: 1}
		}
	},
}
/**
 * DELETE
 * return:
 */
routerNoticias.delete('/:id',checkSchema(SchemaValidatorBodyNoticiaDelete),  async (req: Request, res: Response) => {
	const errors = validationResult(req);
	if (!errors.isEmpty()) {
		return res.status(422).json({ errors: errors.array() });
	}else{
		try {
			const resp = await noticiasService.eliminarNoticia(req.params.id);
			res.send(resp)
		} catch (error) {
			res.status(400).send(error)
		}
	}
});