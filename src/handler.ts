import express from "express";
import serverless from "serverless-http";
import { PrismaClient } from "@prisma/client";

const app = express();
const prisma = new PrismaClient();

app.get("/", async (req, res) => {
  const message = await prisma.message.findMany();
  return res.json({
    text: "Hello World",
    message,
  });
});

export const server = serverless(app);
