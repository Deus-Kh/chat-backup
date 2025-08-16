import express from "express";
import {Server} from 'socket.io'
import { DialogModel, MessageModel } from "../schemas";

class DialogController {
  io: Server;

  constructor(io: Server) {
    this.io = io;
  }

  index = (req: express.Request, res: express.Response) =>{
    // const userId: string = req.params.id;
    if(!req.user) { res.status(401).json({message: 'Unauthorized'}); }
    else{
      const userId = req.user._id
    DialogModel.find().or([{ author: userId }, { partner: userId }])
      .populate(["author", "partner"])
      .populate({
        path: 'lastMessage',
        populate: {
          path: 'user',
        },
      })
      .exec()
      .then((dialog) => {
        
        res.json(dialog);
      });
    }
  }
  async create(req: express.Request, res: express.Response) {
    try {
      const postData = {
        author: req.body.author,
        partner: req.body.partner,
      };
      const dialog = new DialogModel(postData);
      const dialogObj = await dialog.save();
      const message = new MessageModel({
        dialog: dialogObj._id,
        author: dialogObj.author,
        text: req.body.text,
      });
      const messageObj = await message.save();
      await DialogModel.findByIdAndUpdate(dialogObj._id, {
        $set: { lastMessage: messageObj._id },
      });
      res.json({ ...dialogObj.toObject(), lastMessage: messageObj._id });
    } catch (reason) {
      res.json(reason);
    }
  }
  delete(req: express.Request, res: express.Response) {
    const id: string = req.params.id;
    DialogModel.findOneAndDelete({ _id: id }).then(() => {
      res.json({ message: "Dialog deleted successfully" });
    });
  }
}

export default DialogController;
