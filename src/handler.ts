import express from "express";
import serverless from "serverless-http";
import { PrismaClient } from "@prisma/client";

const app = express();
const prisma = new PrismaClient();

app.get("/", async (req, res) => {
  try {
    console.log(process.env.DB_URL);
    const message = await prisma.message.findMany();
    return res.json({
      text: "Hello World",
      message,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      database_url: process.env.DATABASE_URL,
      error,
    });
  }
});

export const server = serverless(app);
