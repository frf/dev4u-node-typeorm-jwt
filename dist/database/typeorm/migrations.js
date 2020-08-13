"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const connectionTypeOrm_1 = __importDefault(require("../connectionTypeOrm"));
connectionTypeOrm_1.default.then(async (connection) => {
    await connection.runMigrations({
        transaction: 'none'
    });
    console.log(connection.migrations.length);
    await connection.close();
}).catch(error => console.log("TypeORM migration error: ", error));
