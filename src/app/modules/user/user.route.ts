import express, { NextFunction, Request, Response } from 'express';
import { createUser } from './user.controller';
const router = express.Router();

router.get('/', (req:Request, res:Response, next: NextFunction)=> {
    res.send('Legal Estate server is running.');
    next();
})

router.get('/create-user', createUser)

export default router; 