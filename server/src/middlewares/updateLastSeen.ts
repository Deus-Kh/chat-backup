import { UserModel } from '../schemas';
import express from 'express';

export const updateLastSeen = async (req: express.Request, res: express.Response, next: express.NextFunction) => {
  const userId = '67fa77f464d9203f55b01fce'; // или из токена, или из session
  if (userId) {
    await UserModel.findByIdAndUpdate(userId, { lastSeen:  Date.now() })
  }
  next();
};