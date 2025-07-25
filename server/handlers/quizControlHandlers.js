import { rooms } from '../state.js';
import { sendQuestionWithTimer, endQuiz, startNextQuestionCountdown, startQuizCountdown } from '../utils/quizUtils.js';

export const quizControlHandlers = (io, socket) => {
    socket.on('setTimeLimit', ({ roomName, timeLimit }) => {
        const room = rooms[roomName];
        if (!room) {
            socket.emit('error', 'Room does not exist.');
            return;
        }
        if (room.hostId !== socket.id) {
            socket.emit('error', 'Only the host can set the time limit.');
            return;
        }
        if (room.quizStarted) {
            socket.emit('error', 'Cannot change time limit after quiz has started.');
            return;
        }
        if (isNaN(timeLimit) || timeLimit < 5 || timeLimit > 120) {
            socket.emit('error', 'Invalid time limit. Must be between 5 and 120 seconds.');
            return;
        }
        room.timeLimit = timeLimit;
        io.to(roomName).emit('message', `Question time limit set to ${timeLimit} seconds by host.`);
        console.log(`Room ${roomName} time limit updated to ${timeLimit}s by ${socket.id}`);
    });

    socket.on('requestQuizForEdit', (roomName) => {
        const room = rooms[roomName];
        if (!room) {
            socket.emit('error', 'Room does not exist.');
            return;
        }
        if (room.hostId !== socket.id) {
            socket.emit('error', 'Only the host can edit the quiz.');
            return;
        }
        socket.emit('loadQuizForEdit', room.quiz.questions);
    });

    socket.on('updateQuiz', ({ roomName, quiz }) => {
        const room = rooms[roomName];
        if (!room) {
            socket.emit('error', 'Room does not exist.');
            return;
        }
        if (room.hostId !== socket.id) {
            socket.emit('error', 'Only the host can update the quiz.');
            return;
        }
        if (room.quizStarted) {
            socket.emit('error', 'Cannot change quiz after it has started.');
            return;
        }
        room.quiz.questions = quiz;
        io.to(roomName).emit('message', 'Quiz questions have been updated by the host.');
        console.log(`Room ${roomName} quiz questions updated by ${socket.id}`);
    });

    socket.on('startQuiz', (roomName) => {
        const room = rooms[roomName];
        if (!room) {
            socket.emit('error', 'Room does not exist.');
            return;
        }
        if (room.hostId !== socket.id) {
            socket.emit('error', 'Only the host can start the quiz.');
            return;
        }
        if (room.quizStarted) {
            socket.emit('error', 'Quiz already started.');
            return;
        }

        room.quizStarted = true;
        room.currentQuestionIndex = 0;
        room.answeredCount = 0;
        for (const playerId in room.players) {
            room.players[playerId].score = 0;
            room.players[playerId].answeredCurrentQuestion = false;
        }
        io.to(roomName).emit('updateScores', Object.values(room.players).map(p => ({ username: p.username, score: p.score })));
        console.log(`Host ${socket.id} starting quiz countdown for room ${roomName}`);
        startQuizCountdown(io, roomName);
        io.to(roomName).emit('message', 'Quiz is about to start!');
    });

    socket.on('submitAnswer', ({ roomName, questionIndex, answer }) => {
        const room = rooms[roomName];
        if (!room || !room.quizStarted || room.currentQuestionIndex !== questionIndex || !room.questionStartTime) {
            socket.emit('error', 'Invalid answer submission or quiz state.');
            return;
        }

        const timeElapsed = Math.floor((Date.now() - room.questionStartTime) / 1000);
        if (timeElapsed >= room.timeLimit) {
            return;
        }

        const correct = room.quiz.questions[questionIndex].answer;
        const player = room.players[socket.id];

        if (player) {
            if (player.answeredCurrentQuestion) {
                socket.emit('message', 'You have already answered this question.');
                return;
            }
            player.answeredCurrentQuestion = true;
            room.answeredCount = (room.answeredCount || 0) + 1;

            if (answer === correct) {
                player.score += 10;
                socket.emit('message', 'Correct answer!');
            } else {
                socket.emit('message', `Wrong answer. The correct answer was: ${correct}`);
            }
            io.to(roomName).emit('updateScores', Object.values(room.players).map(p => ({ username: p.username, score: p.score })));

            const activePlayersCount = Object.keys(room.players).length;
            if (room.answeredCount === activePlayersCount) {
                io.to(roomName).emit('message', 'All players have answered! Revealing correct answer...');
                startNextQuestionCountdown(io, roomName);
            }
        }
    });
};
