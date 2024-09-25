import { NextFunction, Request, Response } from "express";
import { createUserPropertyToDB, getUserPropertyFromDB } from "./property.service";

export const createUserProperty = async (req:Request, res:Response, next: NextFunction) => {
    const data = req.body;
    try{
        const user = await createUserPropertyToDB(data)
        res.status(200).json({
            data: user
        })
    }catch(error){
        res.status(500).json({
            status: 'failed',
            data: null
        })
    }
   
}



// Getting all orders
export const checkoutUserProperties = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const user = await getUserPropertyFromDB();
        res.status(200).json({
            data: user
        });
    } catch (error) {
        console.error('Error fetching user property:', error);
        res.status(500).json({
            status: 'failed',
            data: null
        });
    }
};

