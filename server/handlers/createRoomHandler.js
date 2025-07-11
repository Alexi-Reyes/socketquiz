import { rooms, quizzes } from '../state.js';

export const createRoomHandler = (io, socket) => {
    socket.on('createRoom', ({ username, roomName, timeLimit }) => {
        if (!username || !roomName) {
            socket.emit('error', 'Username and room name are required to create a room.');
            return;
        }
        if (rooms[roomName]) {
            socket.emit('error', `Room '${roomName}' already exists. Please choose a different name or join it.`);
            return;
        }
        if (isNaN(timeLimit) || timeLimit < 5 || timeLimit > 120) {
            socket.emit('error', 'Invalid time limit. Must be between 5 and 120 seconds.');
            return;
        }

        if (!quizzes["general"]) {
            socket.emit('error', 'Default quiz data not found.');
            return;
        }

        rooms[roomName] = {
            quiz: quizzes["general"],
            players: {},
            hostId: socket.id,
            currentQuestionIndex: 0,
            quizStarted: false,
            questionStartTime: null,
            timeLimit: timeLimit
        };

        socket.join(roomName);
        console.log(`${username} created and joined room: ${roomName} with time limit ${timeLimit}s`);
        rooms[roomName].players[socket.id] = { username, score: 0 };

        io.to(roomName).emit('playerList', Object.values(rooms[roomName].players));
        socket.emit('roomCreated', { roomName, isHost: true, timeLimit: rooms[roomName].timeLimit });
        socket.emit('message', `Welcome to your new quiz room, ${username}! Room: ${roomName}`);
    });
};
