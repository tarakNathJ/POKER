import {config} from "dotenv"
import {PrismaPg} from "@prisma/adapter-pg"
import { PrismaClient } from "../generated/prisma/client.js";

config();

if (!process.env.DATABASE_URL) {
  throw new Error("DATABASE_URL is not defined");
}

const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL,
});

const prisma = new PrismaClient({
  adapter,
});

export { prisma };