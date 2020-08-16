"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const SkillsController_1 = __importDefault(require("../controllers/SkillsController"));
const ConnectionsController_1 = __importDefault(require("../controllers/ConnectionsController"));
const routes = express_1.default.Router();
const skillsController = new SkillsController_1.default();
const conenctionsController = new ConnectionsController_1.default();
routes.get('/skills', skillsController.index);
routes.post('/skills', skillsController.create);
routes.get('/connections', conenctionsController.index);
routes.post('/connections', conenctionsController.create);
exports.default = routes;
