import { NextFunction, Request, Response } from "express";
import { createUserToDB, getUserForLogin } from "./user.service";

export const createUser = async (req:Request, res:Response, next: NextFunction) => {
    const data = req.body;
    try{
        const user = await createUserToDB(data)
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



export const lognUser = async (req:Request, res:Response, next: NextFunction) => {
    const data = req.body;
    try{
        const user = await getUserForLogin(data)
        res.status(200).json({
            status: 'success',
            data: user
        })
    }catch(error){
        res.status(500).json({
            status: 'failed',
            data: null
        })
    }
   
}

