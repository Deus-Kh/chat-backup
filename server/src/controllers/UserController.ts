import express from 'express';
import {UserModel} from '../schemas'

import {createJWToken, verifyJWToken} from '../utils'
import { IUser } from '../schemas/Users';

class UserController {

    index(req: express.Request, res: express.Response) { 
        const id :string = req.params.id
        UserModel.findById(id).then((user)=>{
            res.json(user)
        })
    }
    create(req: express.Request, res:express.Response){
    
        const postData = {
            email:req.body.email,
            username:req.body.username,
            password:req.body.password
        }
    
        const user = new UserModel(postData)

        user.save().then((obj:any)=>{
            res.json(obj)
        }).catch(reason=>{
            res.json(reason)
        })
        
    }
    delete(req: express.Request, res: express.Response) { 
        const id :string = req.params.id
        UserModel.findByIdAndDelete(id).then((user)=>{
            res.json({message:"User deleted successfully"})
        })
    }
    login(req: express.Request, res: express.Response){
        const postData = {
            email:req.body.email,
            password:req.body.password
        }

        UserModel.findOne({email:postData.email}).then((user:any )=>{
            if (!user) {
                return res.status(404).json({ message: 'Invalid email or password' });
              }
            if (user.password === postData.password) {
                const token = createJWToken(user)
                
                res.json({
                    status:'success',
                    token:token
                })
            }else{
                res.status(404).json({message:"Invalid email or password"})
            }
                
        })

       
        
        
    }
}

export default UserController