import http from "http";
import express from "express";
import bodyParser from "body-parser";
import dotenv from 'dotenv';
import cors from 'cors'

import { connectDB } from "./core/db";
import initSocket from "./core/socket";
import createRoutes from "./routes";
import { checkAuth, updateLastSeen } from "./middlewares";

dotenv.config();

const SERVER_PORT = process.env.SERVER_PORT || 9999;

const startServer = async () => {
  await connectDB(); // Подключаем MongoDB
  const app = express();
  const server = http.createServer(app);
  const io = initSocket(server);
  app.use(cors({origin:'http://localhost:3000', credentials: true}))
  app.use(bodyParser.json());
  app.use(checkAuth);
  app.use(updateLastSeen);

  createRoutes(app, io);

  server.listen(SERVER_PORT, () => {
    console.log(`Server running on http://localhost:${SERVER_PORT}`);
  });
};

startServer();
