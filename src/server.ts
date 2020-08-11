import express from 'express';
import cors from 'cors';
import routes from './routes/routes';
import routesAuth from './routes/auth';
import authMiddleware from './middlewares/auth';
import "reflect-metadata";
import {createConnection} from "typeorm";

createConnection().then(async connections => {

    const app = express();

    app.use(cors());
    app.use(express.json());
    app.use('/api/auth', routesAuth);
    app.use('/api', routes);

    app.listen(3333);

    console.log("Express application is up and running on port 3333");

}).catch(error => console.log("TypeORM connection error: ", error));