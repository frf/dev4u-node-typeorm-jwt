import {createConnection} from "typeorm";
import env from '../configs/env';

const connection = createConnection({
    type: "postgres",
	url: env.DATABASE_URL,
	synchronize: false,
	migrations: ["src/database/migrations/*.ts"],
	migrationsRun: true,
	logging: true,
	entities: ["src/entities/*.ts"]
});

export default connection;