"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const env_1 = __importDefault(require("../configs/env"));
const connection = typeorm_1.createConnection({
    type: "mysql",
    host: env_1.default.DB_HOST,
    port: 3306,
    username: env_1.default.DB_USER,
    password: env_1.default.DB_PASS,
    database: env_1.default.DB_NAME,
    synchronize: false,
    migrations: ["dist/database/typeorm/migrations/*.js"],
    migrationsRun: false,
    logging: true,
    entities: ["dist/**/*.entity.js"]
});
exports.default = connection;
