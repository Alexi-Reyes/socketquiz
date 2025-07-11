import { createRoomHandler } from './createRoomHandler.js';
import { joinRoomHandler } from './joinRoomHandler.js';
import { quizControlHandlers } from './quizControlHandlers.js';
import { roomManagementHandlers } from './roomManagementHandlers.js';

export const registerSocketHandlers = (io) => {
    io.on('connection', (socket) => {
        console.log('A user connected:', socket.id);

        createRoomHandler(io, socket);
        joinRoomHandler(io, socket);
        quizControlHandlers(io, socket);
        roomManagementHandlers(io, socket);
    });
};
