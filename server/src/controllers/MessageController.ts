import express from 'express';
import socket from "socket.io";
import {MessageModel} from '../schemas'

class MessageController {

    io: socket.Server;

  constructor(io: socket.Server) {
    this.io = io;
  }

    index(req: express.Request, res: express.Response) { 
        const dialogId  = req.body.dialogId
        MessageModel.find({dialog:dialogId})
        .populate(["dialog", "user"]) // add user
        .exec().then((messages)=>{
            res.json(messages)
        }).catch((reason)=>{
            res.status(404).json({
                message: 'Message not found'
            })
        })
    }
    create = (req: express.Request, res:express.Response)=>{
    
        const postData = {
            text:req.body.text,
            dialog:req.body.dialog,
            user:req.body.user,

        }
        const message = new MessageModel(postData)
        message.save().then((obj:any)=>{
            this.io.emit('NEW:MESSAGE', obj)
            res.json(obj)
        }).catch(reason=>{
            res.json(reason)
        })
        
    }
    delete(req: express.Request, res: express.Response) { 
        const id :string = req.params.id
        MessageModel.findByIdAndDelete(id).then(()=>{
            res.json({message:"Message deleted successfully"})
        })
    }
}

export default MessageController