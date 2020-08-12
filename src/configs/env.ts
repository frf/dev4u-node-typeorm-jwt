import dotenv from 'dotenv';

dotenv.config({
    path: process.env.NODE_ENV === "production" ? ".env.production" : ".env"
});

console.log(process.env);

export default {
    // substitua 'mysql' pelo seu basnco padrão
    DB_CLIENT: process.env.DB_CLIENT || 'mysql',
    DB_HOST: process.env.DB_HOST || '127.0.0.1',
    DB_USER: process.env.DB_USER,
    DB_PASS: process.env.DB_PASS,
    DB_NAME: process.env.DB_NAME,
    SERVER_PORT: process.env.SERVER_PORT,
};
