import { UserModel } from '../schemas';
import express from 'express';

import {verifyJWToken} from '../utils'
import { IUser } from '../schemas/Users';

export const checkAuth =  async(req: express.Request, res: express.Response, next: express.NextFunction) => {
    const token = req.headers.authorization?.split(' ')[1];
    console.log(token);
    
    // if (!token) {
    //     return res.status(403).json({ message: 'Token not provided' });
    // }

    // const user: any =  verifyJWToken(token);
    // if (!user || !user._id) {
    //      res.status(403).json({ message: 'Invalid user data in token' });
    // }
    // req.user = user;
  next();
};