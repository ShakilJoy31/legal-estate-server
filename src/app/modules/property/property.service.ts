import { IProperty } from "./property.interface";
import Property from "./property.model";
import bcrypt from 'bcrypt';

export const createUserPropertyToDB = async (data: IProperty) => {
    try{
        const user = await Property.create(data); 
        return user;
    }catch(error){
        return error; 
    }
}



export const getUserPropertyFromDB = async () => {
    try {
        const user = await Property.find();
        return user;
    } catch (error) {
        return error; 
    }
}
