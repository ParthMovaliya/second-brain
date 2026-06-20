import { PrismaPg } from "@prisma/adapter-pg";
import { databaseUrl } from "./config";
import { PrismaClient } from "@prisma/client/extension";

const adapter = new PrismaPg(databaseUrl);
const prisma = new PrismaClient({adapter});

export {prisma};