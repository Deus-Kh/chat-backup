import express from "express";
import {Server} from 'socket.io'
import { DialogModel, MessageModel } from "../schemas";

class DialogController {
  io: Server;

  constructor(io: Server) {
    this.io = io;
  }

  index = async(req: express.Request, res: express.Response) =>{
    // const userId: string = req.params.id;
    // if(!req.user) { res.status(401).json({message: 'Unauthorized'}); }
    // else{
    //   const userId = req.user._id
    // DialogModel.find().or([{ author: userId }, { partner: userId }])
    //   .populate(["author", "partner"])
    //   .populate({
    //     path: 'lastMessage',
    //     populate: {
    //       path: 'user',
    //     },
    //   })
    //   .exec()
    //   .then((dialog) => {
        
    //     res.json(dialog);
    //   });
    // }
    try {
      if (!req.user) {
         res.status(401).json({ message: "Unauthorized" });
      }
      else{
        const userId = req.user._id;
      const dialogs = await DialogModel.find({
        members: { $in: [userId] },
      })
        .populate("members", "username avatar")
        .populate("author", "username avatar")
        .populate({
          path: "lastMessage",
          populate: { path: "user" },
        })
        .exec();

      res.json(dialogs);
      }
      
    } catch (err) {
      res.status(500).json({ message: "Server error", error: err });
    }
  }
  async create(req: express.Request, res: express.Response) {
    // try {
    //   const postData = {
    //     author: req.body.author,
    //     partner: req.body.partner,
    //   };
    //   const dialog = new DialogModel(postData);
    //   const dialogObj = await dialog.save();
    //   const message = new MessageModel({
    //     dialog: dialogObj._id,
    //     author: dialogObj.author,
    //     text: req.body.text,
    //   });
    //   const messageObj = await message.save();
    //   await DialogModel.findByIdAndUpdate(dialogObj._id, {
    //     $set: { lastMessage: messageObj._id },
    //   });
    //   res.json({ ...dialogObj.toObject(), lastMessage: messageObj._id });
    // } catch (reason) {
    //   res.json(reason);
    // }

    try {
      const { type, members, title, text } = req.body;

      if (!req.user) {
        
        res.status(401).json({ message: "Unauthorized" });
      }
      else{
        const userId = req.user._id;

        const dialog = new DialogModel({
        type: type || "private",
        title: type === "group" ? title : undefined,
        members:  [...members,userId], // в private ожидается [userId, partnerId]
        author: userId,
      });

      const dialogObj = await dialog.save();
      
      
      let messageObj = null;
      if (text) {
        const message = new MessageModel({
          dialog: dialogObj._id,
          user: userId,
          text,
        });

        messageObj = await message.save();

        await DialogModel.findByIdAndUpdate(dialogObj._id, {
          $set: { lastMessage: messageObj._id },
        });
      }
      res.json({
        ...dialogObj.toObject(),
        lastMessage: messageObj ? messageObj._id : null,
      });
    }
     
    } catch (err) {
      res.status(500).json({ message: "Server error", error: err });
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
