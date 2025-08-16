import mongoose from "mongoose";

const MONGO_URL = process.env.MONGO_URL || 'mongodb://127.0.0.1:27017/chat';

export const connectDB = async () => {
  try {
    await mongoose.connect(MONGO_URL);
    console.log("MongoDB connected");
  } catch (error) {
    console.error("MongoDB connection error:", error);
    process.exit(1); // Завершаем процесс при ошибке подключения
  }
};
