import {Request, Response} from 'express';
import db from '../database/connection';
import { sign } from "jsonwebtoken";
import { REFRESH_TOKEN_SECRET, ACCESS_TOKEN_SECRET } from '../configs/auth';
import * as bcrypt from "bcryptjs";

export default class AuthController {
    async register(request: Request, response: Response) {
        const { name, avatar, email, password, phone, bio } = request.body;

        const hashedPassword = await bcrypt.hash(password, 10);
       
        const { user_id } = request.body;

        const user = await  db('users').insert({
            name, avatar, email, password, phone, bio
        });
        
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

        console.log(dataReturn);

        return response.json(dataReturn);
    }

    async login(request: Request, response: Response) {
        const { user_id } = request.body;

        await db('connections').insert({
            user_id,
        });

        return response.send();
    }
}