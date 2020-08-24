import express, { Request, Response } from 'express';
import HomeController from '../controllers/HomeController';
import authMiddleware from '../middlewares/auth';

const routes = express.Router();

const homeController = new HomeController();

routes.get('/users', homeController.index);

export default routes;
