import jwt, { VerifyErrors } from "jsonwebtoken";
import { IUser } from "../schemas/Users";


export interface DecodedData {
  data:  IUser;
  
}


export default (token: string): Promise<DecodedData | null> => {
  return new Promise((resolve: (decodedData: DecodedData) => void,
      reject: (err: VerifyErrors) => void) => {
    // @ts-ignore
    jwt.verify(token, process.env.JWT_SECRET || '', (err:VerifyErrors, decodedData) => {
      if (err || !decodedData) {
        return reject(err);
      }
      resolve(decodedData as DecodedData);
    });
  });
};
