import express, { NextFunction, Request, Response } from 'express';
import { checkoutUserProperties, createUserProperty } from './property.controller';
const router = express.Router();

router.get('/', (req:Request, res:Response, next: NextFunction)=> {
    res.send('Legal Estate server is running.');
    next();
})

router.post('/sell-property', createUserProperty)
router.get('/checkout-property', checkoutUserProperties)

export default router; 