import express, { Request, Response } from 'express';
import AuthController from '../controllers/AuthController';

const routes = express.Router();

const authController = new AuthController();

routes.post('/login', authController.register);
routes.post('/register', authController.register);

routes.get('/test', (request: Request, response: Response) => {
    return response.json({'success': 'OK'});
});


export default routes;
