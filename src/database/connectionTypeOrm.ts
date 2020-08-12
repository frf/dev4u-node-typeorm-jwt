import {createConnection} from "typeorm";
import env from '../configs/env';

const connection = createConnection({
    type: "mysql",
	host: env.DB_HOST,
	port: 3306,
	username: env.DB_USER,
	password: env.DB_PASS,
	database: env.DB_NAME,
	synchronize: false,
	migrations: ["src/database/typeorm/migrations/*.ts"],
	migrationsRun: false,
	logging: true,
	entities: ["dist/**/*.entity.js"]
});

export default connection;