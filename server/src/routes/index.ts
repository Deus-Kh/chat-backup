import { Router, Express } from "express";
import userRoutes from "./user.routes";
import dialogRoutes from "./dialog.routes";
import messageRoutes from "./message.routes";
import socket from "socket.io";

export default (app: Express, io: socket.Server) => {
  const router = Router();
    
  router.use("/user", userRoutes(io));
  router.use("/dialogs", dialogRoutes(io));
  router.use("/messages", messageRoutes(io));

  app.use(router);
};
