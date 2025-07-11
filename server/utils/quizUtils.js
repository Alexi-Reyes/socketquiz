import { rooms } from '../state.js';

export function sendQuestionWithTimer(io, roomName) {
    const room = rooms[roomName];
    if (!room) return;

    if (room.timer) {
        clearTimeout(room.timer);
    }

    for (const playerId in room.players) {
        room.players[playerId].answeredCurrentQuestion = false;
    }
    room.answeredCount = 0;

    const question = room.quiz.questions[room.currentQuestionIndex];
    io.to(roomName).emit('question', {
        question: question.question,
        options: question.options,
        index: room.currentQuestionIndex
    });
    io.to(roomName).emit('message', `Question ${room.currentQuestionIndex + 1} of ${room.quiz.questions.length}`);

    room.questionStartTime = Date.now();
    let timeLeft = room.timeLimit;

    io.to(roomName).emit('timer', timeLeft);

    if (room.timerInterval) {
        clearInterval(room.timerInterval);
    }

    room.timerInterval = setInterval(() => {
        timeLeft--;
        io.to(roomName).emit('timer', timeLeft);
        if (timeLeft <= 0) {
            clearInterval(room.timerInterval);
            room.currentQuestionIndex++;
            if (room.currentQuestionIndex < room.quiz.questions.length) {
                sendQuestionWithTimer(io, roomName);
            } else {
                endQuiz(io, roomName);
            }
        }
    }, 1000);
}

export function endQuiz(io, roomName) {
    const room = rooms[roomName];
    if (!room) return;

    if (room.timerInterval) {
        clearInterval(room.timerInterval);
    }

    io.to(roomName).emit('quizEnd', Object.values(room.players).sort((a, b) => b.score - a.score));
    io.to(roomName).emit('message', 'Quiz has ended! See scores above.');
    delete rooms[roomName];
}
