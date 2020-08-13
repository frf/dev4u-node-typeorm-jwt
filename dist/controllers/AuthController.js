"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const bcrypt = __importStar(require("bcryptjs"));
class AuthController {
    async register(request, response) {
        const { name, avatar, email, password, phone, bio } = request.body;
        const hashedPassword = await bcrypt.hash(password, 10);
        const { user_id } = request.body;
        // const user = await  db('users').insert({
        //     name, avatar, email, password, phone, bio
        // });
        // const refreshToken = sign(
        //     { 
        //         user_id: user.id, 
        //         name: user.name
        //     },
        //     REFRESH_TOKEN_SECRET!,
        //     {
        //         expiresIn: "7d"
        //     }
        // );
        // const accessToken = sign({
        //     user_id: user.id,
        //     name: user.name
        // }, ACCESS_TOKEN_SECRET!, {
        //     expiresIn: "15min"
        // });
        // const dataReturn = {
        //     'token': accessToken,
        //     'token_refresh': refreshToken
        // };
        // console.log(dataReturn);
        return response.json({});
    }
    async login(request, response) {
        const { user_id } = request.body;
        // await db('connections').insert({
        //     user_id,
        // });
        return response.send();
    }
}
exports.default = AuthController;
