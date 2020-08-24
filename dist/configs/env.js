"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config({
    path: process.env.NODE_ENV === "production" ? ".env.production" : ".env"
});
exports.default = {
    DB_CLIENT: process.env.APP_DB_CLIENT || 'mysql',
    DB_HOST: process.env.APP_DB_HOST || '127.0.0.1',
    DB_USER: process.env.APP_DB_USER,
    DB_PASS: process.env.APP_DB_PASS,
    DB_NAME: process.env.APP_DB_NAME,
    SERVER_PORT: process.env.SERVER_PORT || 3000,
    DATABASE_URL: process.env.DATABASE_URL,
};
