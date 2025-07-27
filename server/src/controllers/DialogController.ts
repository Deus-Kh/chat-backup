import express from 'express';
import {DialogModel} from '../schemas'

class DialogController {

    index(req: express.Request, res: express.Response) { 
        const authorId :string = req.params.id
        DialogModel.find({author:authorId})
        .populate(["author","partner"])
        .exec().then((dialog)=>{
            res.json(dialog)
        })
    }
    create(req: express.Request, res:express.Response){
    
        const postData = {
            author:req.body.author,
            partner:req.body.partner,
        }
    
        const dialogue = new DialogModel(postData)
        dialogue.save().then((obj:any)=>{
            res.json(obj)
        }).catch(reason=>{
            res.json(reason)
        })
        
    }
    delete(req: express.Request, res: express.Response) { 
        const id :string = req.params.id
        DialogModel.findOneAndDelete({_id:id}).then(()=>{
            res.json({message:"Dialog deleted successfully"})
        })
    }
}

export default DialogController