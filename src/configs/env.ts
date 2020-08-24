import dotenv from 'dotenv';

dotenv.config({
    path: process.env.NODE_ENV === "production" ? ".env.production" : ".env"
});

export default {
    DB_CLIENT: process.env.APP_DB_CLIENT || 'mysql',
    DB_HOST: process.env.APP_DB_HOST || '127.0.0.1',
    DB_PORT: process.env.APP_DB_PORT || '3306',
    DB_USER: process.env.APP_DB_USER,
    DB_PASS: process.env.APP_DB_PASS,
    DB_NAME: process.env.APP_DB_NAME,
    SERVER_PORT: process.env.SERVER_PORT || 3000,
    DATABASE_URL: process.env.CLEARDB_DATABASE_URL,
};
