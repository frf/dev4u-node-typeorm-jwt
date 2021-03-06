import express from 'express';
import cors from 'cors';
import routes from './routes/routes';
import routesAuth from './routes/auth';
import "reflect-metadata";
import env from './configs/env';

import connection from './database/connectionTypeOrm';
import { REFRESH_TOKEN_SECRET, ACCESS_TOKEN_SECRET } from './configs/auth';

console.log(process.env.CLEARDB_DATABASE_URL);

connection.then(async connections => {

    const app = express();

    app.use(cors());
    app.use(express.json());
    app.use('/api/auth', routesAuth);
    app.use('/api', routes);

    app.listen(process.env.PORT || 3000);
    
    console.log("Database ==> " + connections.isConnected);
    console.log("Express application is up and running on port " + env.SERVER_PORT);

}).catch(error => console.log("TypeORM connection error: ", error));