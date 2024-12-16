"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
// Application route
const user_route_1 = __importDefault(require("./app/modules/user/user.route"));
const property_route_1 = __importDefault(require("./app/modules/property/property.route"));
// Using cors
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use("/api/v1/user", user_route_1.default);
app.use("/api/v1/property", property_route_1.default);
exports.default = app;
