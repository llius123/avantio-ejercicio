import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';

import connectDb from './conexion/conexion';
import routerNoticias from './noticias/noticias.controller'

//Constantes
const app = express();
const port = 3000;
const versionApi = "apiV1"
const connection = "mongodb://localhost:27017/avantio";

//Middlewares
app.use(express.json());
app.use(cors())
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true, parameterLimit: 1000000}));

//Rutas
app.use(`/${versionApi}/noticias`, routerNoticias);

//Conexcion base de datos y despliegue del server node
app.listen(port, err => {
  if (err) {
	return console.error(err);
  }
  connectDb(connection).then(() => {
    console.log('MongoDb connected');
  });
  return console.log(`server is listening on ${port}`);
});