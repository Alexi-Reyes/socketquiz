import { rooms } from '../state.js';
import { sendQuestionWithTimer } from '../utils/quizUtils.js';

export const joinRoomHandler = (io, socket) => {
    socket.on('joinRoom', ({ username, roomName }) => {
        if (!username || !roomName) {
            socket.emit('error', 'Username and room name are required.');
            return;
        }

        if (!rooms[roomName]) {
            socket.emit('error', `Quiz room '${roomName}' does not exist. Please create it first.`);
            return;
        }

        socket.join(roomName);
        console.log(`${username} joined room: ${roomName}`);

        socket.username = username;
        rooms[roomName].players[socket.id] = { username, score: 0 };

        const isHost = rooms[roomName].hostId === socket.id;

        io.to(roomName).emit('playerList', Object.values(rooms[roomName].players));

        socket.emit('roomJoined', { roomName, isHost, timeLimit: rooms[roomName].timeLimit, quizStarted: rooms[roomName].quizStarted });
        socket.emit('message', `Welcome to the ${roomName} quiz, ${username}! Waiting for host to start.`);

        if (rooms[roomName].quizStarted) {
            const currentQuestion = rooms[roomName].quiz.questions[rooms[roomName].currentQuestionIndex];
            io.to(socket.id).emit('question', {
                question: currentQuestion.question,
                options: currentQuestion.options,
                index: rooms[roomName].currentQuestionIndex
            });
            if (rooms[roomName].questionStartTime) {
                const timeLeft = rooms[roomName].timeLimit - Math.floor((Date.now() - rooms[roomName].questionStartTime) / 1000);
                io.to(socket.id).emit('timer', timeLeft > 0 ? timeLeft : 0);
            }
        }
    });
};
