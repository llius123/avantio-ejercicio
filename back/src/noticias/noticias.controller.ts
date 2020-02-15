import express, { Request, Response } from 'express';
import * as noticiasService from './noticias.service';
import {check, validationResult, checkSchema,} from 'express-validator';

const routerNoticias = express.Router();

export default routerNoticias.get('/', async (req: Request, res: Response) => {
    res.send('hola');
});

//El esquema que voy a usar para validar el body de las peticiones POST/PUT
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
routerNoticias.post('/', checkSchema(SchemaValidatorBodyNoticiaCrear) , async (req: Request, res: Response) => {
	const errors = validationResult(req);
	if (!errors.isEmpty()) {
		return res.status(422).json({ errors: errors.array() });
	}else{
		try {
			const resp = await noticiasService.createNoticia(req.body);
			res.send(resp)
		} catch (error) {
			res.status(error.codigo).send(error)
		}
	}
});