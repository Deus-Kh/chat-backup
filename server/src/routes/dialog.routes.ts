import { Router } from "express";
import { DialogController } from "../controllers";
import socket from "socket.io";

export default (io: socket.Server) => {
  const router = Router();
  const DialogCtrl = new DialogController(io);

  router.get("/", DialogCtrl.index);
  router.post("/", DialogCtrl.create);
  router.delete("/:id", DialogCtrl.delete);

  return router;
};
