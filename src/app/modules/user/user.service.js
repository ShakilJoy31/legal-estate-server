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
exports.getUserForLogin = exports.createUserToDB = void 0;
const user_model_1 = __importDefault(require("./user.model"));
const createUserToDB = (data) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield user_model_1.default.create(data);
        return user;
    }
    catch (error) {
        return error;
    }
});
exports.createUserToDB = createUserToDB;
const getUserForLogin = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = data;
    try {
        const user = yield user_model_1.default.findOne({ email });
        if (!user) {
            return { error: "User not found" };
        }
        if (password !== user.password) {
            return { error: "Invalid password" };
        }
        return user;
    }
    catch (error) {
        return error;
    }
});
exports.getUserForLogin = getUserForLogin;
// export const getUserForLogin = async (data: IUser) => {
//     const {email, password} = data
//     try{
//         const user = await User.findOne({email: email});
//         if(user){
//             const
//         } 
//         return user;
//     }catch(error){
//         return error; 
//     }
// }
