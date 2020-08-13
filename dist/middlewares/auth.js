"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const auth_1 = require("../configs/auth");
function auth(req, res, next) {
    const authHeader = req.headers.authorization;
    if (!authHeader)
        return res.status(401).json({ error: 'No token provider' });
    const parts = authHeader.split(' ');
    if (parts.length !== 2)
        return res.status(401).json({ error: 'Token error parts' });
    const [scheme, token] = parts;
    if (!/^Bearer$/i.test(scheme))
        return res.status(401).json({ error: 'Token erro format' });
    jsonwebtoken_1.default.verify(token, auth_1.ACCESS_TOKEN_SECRET, (erro, decode) => {
        if (erro)
            return res.status(401).json({ error: 'Token invalid' });
        console.log('OKOKO');
        return next();
    });
}
exports.default = auth;
