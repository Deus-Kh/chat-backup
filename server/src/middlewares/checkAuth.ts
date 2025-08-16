import { UserModel } from '../schemas';
import express from 'express';

import {verifyJWToken} from '../utils'
import { DecodedData } from "../utils/verifyJWToken";
import { IUser } from '../schemas/Users';

export const checkAuth =  async(req: express.Request, res: express.Response, next: express.NextFunction) => {


  if (
    req.path === "/user/login" ||
    req.path === "/user/registration" ||
    req.path === "/user/signin" ||
    req.path === "/user/signup" ||
    req.path === "/user/verify"
  ) {
    return next();
  }
    const token = req.headers.authorization?.split(' ')[1] 
    
    console.log(token);
    


    if (token) {
      verifyJWToken(token)
      .then((user:DecodedData | null)=>{
        if (user) {
          req.user = user.data;
          console.log("UserРРРР",user);
          
        }
        next()
      }).catch((err)=>{
        console.log("Error :", err);
        
        res.status(403).json({ message: 'Token not provided' });
      })
    }


  
};