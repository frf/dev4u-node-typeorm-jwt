import express, { Request, Response } from 'express';
import SkillsController from '../controllers/SkillsController';
import ConnectionsController from '../controllers/ConnectionsController';
import authMiddleware from '../middlewares/auth';

const routes = express.Router();

const skillsController = new SkillsController();
const conenctionsController = new ConnectionsController();

routes.get('/skills', skillsController.index);
routes.post('/skills', skillsController.create);

routes.get('/connections', conenctionsController.index);
routes.post('/connections', conenctionsController.create);

routes.get('/test', (request: Request, response: Response) => {
    return response.json({'success': 'OK', 'message': 'Hello World'});
});

export default routes;
