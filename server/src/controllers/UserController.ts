import express from "express";
import  bcrypt  from "bcrypt";
import socket from 'socket.io'
import { UserModel } from "../schemas";

import { createJWToken, verifyJWToken } from "../utils";
import { IUser } from "../schemas/Users";
import { Result, ValidationError, validationResult } from "express-validator";

class UserController {

  io: socket.Server;

  constructor(io: socket.Server) {
    this.io = io;
  }

  index(req: express.Request, res: express.Response) {
    const id: string = req.params.id;
    UserModel.findById(id).then((user) => {
      res.json(user);
    });
  }
  getMe (req: express.Request, res: express.Response) {
    if (!req.user ) {
    res.status(401).json({ message: "Unauthorized" });
  }
    else{
      const id = req.user._id;
    UserModel.findById(id, (err: any, user: IUser) => {
      if (err || !user) {
        return res.status(404).json({
          message: "User not found",
        });
      }
      res.json(user);
    });
    }
  };
  create(req: express.Request, res: express.Response) {
    const postData = {
      email: req.body.email,
      username: req.body.username,
      password: req.body.password,
    };

    const user = new UserModel(postData);

    user
      .save()
      .then((obj: any) => {
        res.json(obj);
      })
      .catch((reason) => {
        res.json(reason);
      });
  }
  delete(req: express.Request, res: express.Response) {
    const id: string = req.params.id;
    UserModel.findByIdAndDelete(id).then((user) => {
      res.json({ message: "User deleted successfully" });
    });
  }
  login(req: express.Request, res: express.Response) {
    const postData = {
      email: req.body.email,
      password: req.body.password,
    };

    const errors: Result<ValidationError> = validationResult(req);

    if (!errors.isEmpty()) {
      res.status(422).json({ errors: errors.array() });
    } else {
      UserModel.findOne({ email: postData.email }).then((user: any) => {
        if (!user) {
          return res.status(404).json({ message: "Invalid email or password" });
        }
        if (bcrypt.compareSync(postData.password, user.password)) {
          const token = createJWToken(user);

          res.json({
            status: "success",
            token: token,
          });
        } else {
          res.status(404).json({ message: "Invalid email or password" });
        }
      });
    }
  }
}

export default UserController;
