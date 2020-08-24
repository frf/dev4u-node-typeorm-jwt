import {Request, Response} from 'express';
import {getCustomRepository} from "typeorm";
import {UserRepository} from "../repository/UserRepository";

export default class HomeController {

    async index(request: Request, response: Response) {

        const userRepository = getCustomRepository(UserRepository); 

        const users =  await userRepository.findAll();

        return response.json(users);
    }
}