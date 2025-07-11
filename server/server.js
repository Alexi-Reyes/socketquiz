import express from 'express';
import { createServer } from 'http';
import { Server } from 'socket.io';
import { registerSocketHandlers } from './handlers/socketHandlers.js';
import 'dotenv/config';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const server = createServer(app);
const io = new Server(server);

const PORT = process.env.PORT || 3000;

app.use(express.static('public'));

registerSocketHandlers(io);

server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
