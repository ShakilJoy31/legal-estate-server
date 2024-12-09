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



export const updatePropertyConditionFromDB = async (propertyId: string, updatedData: object) => {
    try {
        // Update the property condition using the propertyId
        const property = await Property.findOneAndUpdate(
            { _id: propertyId },  // Find the property by its ID
            { $set: updatedData },  // Update the property with the new data (e.g., condition)
            { new: true }  // Return the updated document
        )
            .populate({
                path: 'propertyOwner', 
                select: 'name email phone address photo'
            })
            .exec();

        if (!property) {
            console.error('Property not found for the given propertyId');
            return null;
        }
        return property;  // Return the updated property
    } catch (error) {
        console.error('Error updating property:', error);
        return null;
    }
};

