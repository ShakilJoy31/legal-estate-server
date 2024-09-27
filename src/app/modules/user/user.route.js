"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const user_controller_1 = require("./user.controller");
const router = express_1.default.Router();
router.get('/', (req, res, next) => {
    res.send('Legal Estate server is running.');
    next();
});
router.post('/create-user', user_controller_1.createUser);
router.post('/login-user', user_controller_1.lognUser);
router.post('/verification-email', user_controller_1.emailVerification);
exports.default = router;
