import { Router } from "express";
import { RegistrationValidation, LoginValidation } from "../utils/validations";
import { UserController } from "../controllers";
import socket from "socket.io";

export default (io: socket.Server) => {
  const router = Router();
  const UserCtrl = new UserController(io);

  // Валидация для роутов, где нужно
  router.post("/signup", RegistrationValidation, UserCtrl.create);
  router.post("/signin", LoginValidation, UserCtrl.login);
  router.get("/me", UserCtrl.getMe);
  router.delete("/:id", UserCtrl.delete);

  return router;
};
