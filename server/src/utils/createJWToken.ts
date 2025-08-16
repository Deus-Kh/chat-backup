import jwt from "jsonwebtoken";
import express from "express";
import { omit } from "lodash";

interface ILoginData {
  email: string;
  password: string;
}

export default (user: ILoginData) => {
  let token = jwt.sign(
    {
      data: omit(user, ["password"]),
    },
    process.env.JWT_SECRET || "",
    {
      //@ts-ignore
      expiresIn: process.env.JWT_MAX_AGE,
      algorithm: process.env.JWT_ALGORITHM,
    }
  );
  return token;
};
