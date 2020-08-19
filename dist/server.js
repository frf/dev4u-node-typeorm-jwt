"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const routes_1 = __importDefault(require("./routes/routes"));
const auth_1 = __importDefault(require("./routes/auth"));
const auth_2 = __importDefault(require("./middlewares/auth"));
require("reflect-metadata");
const env_1 = __importDefault(require("./configs/env"));
const connectionTypeOrm_1 = __importDefault(require("./database/connectionTypeOrm"));
connectionTypeOrm_1.default.then(async (connections) => {
    const app = express_1.default();
    app.use(cors_1.default());
    app.use(express_1.default.json());
    app.use('/api/auth', auth_1.default);
    app.use('/api', auth_2.default, routes_1.default);
    app.listen(env_1.default.SERVER_PORT);
    console.log("Database ==> " + connections.isConnected);
    console.log("Express application is up and running on port " + env_1.default.SERVER_PORT);
}).catch(error => console.log("TypeORM connection error: ", error));
