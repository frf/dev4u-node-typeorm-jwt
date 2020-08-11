import {Request, Response} from 'express';
import db from '../database/connection';
import {Pacientes} from '../entity/Paciente'

export default class PacienteController {
    async index(request: Request, response: Response) {
        // const pacientes = await db('pacientes');
        const allUsers = await Pacientes.find({skip: 0, take: 100});
        return response.json(allUsers);
    }
}