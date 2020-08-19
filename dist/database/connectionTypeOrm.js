"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const env_1 = __importDefault(require("../configs/env"));
const connection = typeorm_1.createConnection({
    type: "postgres",
    url: env_1.default.DATABASE_URL,
    synchronize: false,
    migrations: ["src/database/typeorm/migrations/*.ts"],
    migrationsRun: false,
    logging: true,
    entities: ["src/**/*.entity.ts"]
});
exports.default = connection;
