import { Router } from "express";
import { MessageController } from "../controllers";
import socket from "socket.io";

export default (io: socket.Server) => {
  const router = Router();
  const MessageCtrl = new MessageController(io);

  router.get("/", MessageCtrl.index);
  router.post("/", MessageCtrl.create);
  router.delete("/:id", MessageCtrl.delete);

  return router;
};
