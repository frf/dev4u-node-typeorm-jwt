import {createConnection} from "typeorm";

const connection = createConnection({
    type: "mysql",
	url: process.env.JAWSDB_URL,
	synchronize: false,
	migrations: ["src/database/migrations/*.ts"],
	migrationsRun: true,
	logging: true,
	entities: ["src/entities/*.ts"]
});

export default connection;