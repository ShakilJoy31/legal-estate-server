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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUserPropertyFromDB = exports.createUserPropertyToDB = void 0;
const property_model_1 = __importDefault(require("./property.model"));
const createUserPropertyToDB = (data) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield property_model_1.default.create(data);
        return user;
    }
    catch (error) {
        return error;
    }
});
exports.createUserPropertyToDB = createUserPropertyToDB;
const getUserPropertyFromDB = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const properties = yield property_model_1.default.find()
            .populate({
            path: 'propertyOwner',
            select: 'name email phone address photo'
        })
            .exec();
        return properties;
    }
    catch (error) {
        console.error('Error fetching properties:', error);
        return error;
    }
});
exports.getUserPropertyFromDB = getUserPropertyFromDB;
// export const getUserPropertyFromDB = async () => {
//     try {
//         const properties = await Property.find();
//         console.log(properties)
//         return properties;
//     } catch (error) {
//         return error; 
//     }
// }
