"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const property_controller_1 = require("./property.controller");
const router = express_1.default.Router();
router.get('/', (req, res, next) => {
    res.send('Legal Estate server is running.');
    next();
});
router.post('/sell-property', property_controller_1.createUserProperty);
router.get('/checkout-property', property_controller_1.checkoutUserProperties);
exports.default = router;
