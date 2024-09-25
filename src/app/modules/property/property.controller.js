"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkoutUserProperties = exports.createUserProperty = void 0;
const property_service_1 = require("./property.service");
const createUserProperty = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const data = req.body;
    try {
        const user = yield (0, property_service_1.createUserPropertyToDB)(data);
        res.status(200).json({
            data: user
        });
    }
    catch (error) {
        res.status(500).json({
            status: 'failed',
            data: null
        });
    }
});
exports.createUserProperty = createUserProperty;
// Getting all orders
const checkoutUserProperties = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield (0, property_service_1.getUserPropertyFromDB)();
        res.status(200).json({
            data: user
        });
    }
    catch (error) {
        console.error('Error fetching user property:', error);
        res.status(500).json({
            status: 'failed',
            data: null
        });
    }
});
exports.checkoutUserProperties = checkoutUserProperties;
