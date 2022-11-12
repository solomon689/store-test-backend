import { Server } from "./config/server";
import dotenv from "dotenv";

dotenv.config();

const server: Server = new Server();

server.listen(process.env.PORT || 3000);