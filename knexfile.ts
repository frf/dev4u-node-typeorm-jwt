import path from 'path';
import env from './src/configs/env';

module.exports = {
    client: env.DB_CLIENT,
    connection: {
        // filename: path.resolve(__dirname, 'src', 'database', 'database.sqlite')
        host : env.DB_HOST,
        user: env.DB_USER,
        password: env.DB_PASS,
        database: env.DB_NAME
    },
    migrations: {
        directory: path.resolve(__dirname, 'src', 'database', 'knex', 'migrations')
    },
    useNullAsDefault: true
};