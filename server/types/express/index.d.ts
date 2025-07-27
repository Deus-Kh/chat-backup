import express from 'express'
import {IUser} from '../../src/schemas/Users'
declare global {
    namespace Express {
      interface Request {
        user?: IUser;
      }
    }
  }
