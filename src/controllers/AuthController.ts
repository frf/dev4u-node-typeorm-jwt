import {Request, Response} from 'express';
import { sign } from "jsonwebtoken";
import { REFRESH_TOKEN_SECRET, ACCESS_TOKEN_SECRET } from '../configs/auth';
import * as bcrypt from "bcryptjs";
import {getCustomRepository} from "typeorm";
import {UserRepository} from "../repository/UserRepository";

export default class AuthController {
    async register(request: Request, response: Response) {
        const { name, email, password } = request.body;

        const hashedPassword = await bcrypt.hash(password, 10);
       
        const userRepository = getCustomRepository(UserRepository); 

        const userExist =  await userRepository.findByMail(email);

        if (userExist.length > 0) {
            return response.status(400).json({
                error: 'Email already exists'
            })
        }

        const user = userRepository.create(); // same as const user = new User();
        user.name = name;
        user.email = email;
        user.password = hashedPassword;

        await userRepository.save(user);

        const refreshToken = sign(
            { 
                user_id: user.id, 
                name: user.name
            },
            REFRESH_TOKEN_SECRET!,
            {
                expiresIn: "7d"
            }
        );

        const accessToken = sign({
            user_id: user.id,
            name: user.name
        }, ACCESS_TOKEN_SECRET!, {
            expiresIn: "15min"
        });

        const dataReturn = {
            'token': accessToken,
            'token_refresh': refreshToken
        };

        return response.json(dataReturn);
    }

    async login(request: Request, response: Response) {
        const { user_id } = request.body;

        // await db('connections').insert({
        //     user_id,
        // });

        return response.send();
    }
}