import jwt from "jsonwebtoken";
import { IUser } from "../schemas/Users";
export default (token:string) =>{
    return new Promise((resolve, reject) => {
        //@ts-ignore
        jwt.verify(token,process.env.JWT_SECRET!, (err, decodedData:IUser)=>{
            if (err||!decodedData) {
                return reject(err)
            }
            resolve(decodedData)
        })
    })
}