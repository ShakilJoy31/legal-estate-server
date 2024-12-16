import { ObjectId } from 'mongoose';

export interface IProperty {
    propertyName: string;
    price: string;
    location: string;
    bedrooms: string;
    bahtrooms: string;
    size: string;
    year: string;
    propertyType: string;
    status: string;
    description: string;
    contactNumber: string;
    image: string[];
    propertyOwner: ObjectId;
<<<<<<< HEAD
    condition: string;
    rejectionMessage: string
=======
    condition: string
>>>>>>> db66137f3eae80b102be4bd09825aaeb40d2a77d
}