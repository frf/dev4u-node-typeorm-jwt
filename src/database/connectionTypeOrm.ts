import {createConnection} from "typeorm";

const connection = createConnection({
    type: "mysql",
	url: process.env.CLEARDB_DATABASE_URL,
	synchronize: false,
	migrations: ["src/database/migrations/*.ts"],
	migrationsRun: true,
	logging: true,
	entities: ["src/entities/*.ts"]
});

export default connection;