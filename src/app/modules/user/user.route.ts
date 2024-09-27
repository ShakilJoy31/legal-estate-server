import express, { NextFunction, Request, Response } from 'express';
import { createUser, emailVerification, lognUser } from './user.controller';
const router = express.Router();

router.get('/', (req:Request, res:Response, next: NextFunction)=> {
    res.send('Legal Estate server is running.');
    next();
})

router.post('/create-user', createUser)
router.post('/login-user', lognUser)
router.post('/verification-email', emailVerification)

export default router; 