"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// import db from '../database/connection';
class ConnectionsController {
    async index(request, response) {
        console.log('OKOK');
        // const totalConnections = await db('connections').count('* as total');
        // const { total } = totalConnections[0];
        return response.json({});
    }
    async create(request, response) {
        const { user_id } = request.body;
        // await db('connections').insert({
        //     user_id,
        // });
        return response.send();
    }
}
exports.default = ConnectionsController;
