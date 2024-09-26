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
        const properties = await Property.find()
            .populate({
                path: 'propertyOwner', 
                select: 'name email phone address photo' 
            })
            .exec();
        return properties;
    } catch (error) {
        console.error('Error fetching properties:', error);
        return error;
    }
};




// export const getUserPropertyFromDB = async () => {
//     try {
//         const properties = await Property.find();
//         console.log(properties)
//         return properties;
//     } catch (error) {
//         return error; 
//     }
// }
