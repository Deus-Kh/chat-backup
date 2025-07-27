
// import { Request, Response, NextFunction } from 'express';
// import jwt from 'jsonwebtoken';

// export default function (req: Request, res: Response, next: NextFunction) {
//   const token = req.headers.authorization?.split(' ')[1];
//   if (!token) return res.status(403).json({ message: 'No token provided' });

//   try {
//     const decoded = jwt.verify(token, process.env.JWT_SECRET!);
//     req.userId = (decoded as any).id;
//     next();
//   } catch {
//     res.status(403).json({ message: 'Invalid token' });
//   }
// }
