"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const propertySchema = new mongoose_1.Schema({
    propertyName: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true,
    },
    location: {
        type: String,
        required: true
    },
    bedrooms: {
        type: String,
        required: true
    },
    bahtrooms: {
        type: String,
        required: true
    },
    size: {
        type: String,
        required: true
    },
    year: {
        type: String,
        required: true
    },
    propertyType: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    contactNumber: {
        type: String,
        required: true
    },
    image: {
        type: [String],
        required: true
    },
    // Updated to reference the 'Users' collection
    propertyOwner: {
        type: mongoose_1.Schema.Types.ObjectId, // Store ObjectId, not a string
        ref: 'Users', // Reference the Users collection
        required: true
    }
});
propertySchema.set('autoIndex', true);
const Property = (0, mongoose_1.model)("Property", propertySchema);
exports.default = Property;
// import { model, Schema } from "mongoose";
// import { IProperty } from "./property.interface";
// const propertySchema = new Schema<IProperty>({
//     propertyName: {
//         type: String,
//         required: true
//     },
//     price: {
//         type: String,
//         required: true,
//     },
//     location: {
//         type: String,
//         required: true
//     },
//     bedrooms: {
//         type: String,
//         required: true
//     },
//     bahtrooms: {
//         type: String,
//         required: true
//     },
//     size: {
//         type: String,
//         required: true
//     },
//     year: {
//         type: String,
//         required: true
//     },
//     propertyType: {
//         type: String,
//         required: true
//     },
//     status: {
//         type: String,
//         required: true
//     },
//     description: {
//         type: String,
//         required: true
//     },
//     contactNumber: {
//         type: String,
//         required: true
//     },
//     image: {
//         type: [String],
//         required: true
//     },
//     propertyOwner: {
//         type: String,
//         required: true
//     }
// });
// propertySchema.set('autoIndex', true);
// const Property = model<IProperty>("property", propertySchema);
// export default Property;
