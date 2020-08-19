import {createConnection} from "typeorm";
import env from '../configs/env';

const connection = createConnection({
    type: "postgres",
	url: env.DATABASE_URL,
	synchronize: false,
	migrations: ["src/database/typeorm/migrations/*.ts"],
	migrationsRun: false,
	logging: true,
	entities: ["src/**/*.entity.ts"]
});

export default connection;