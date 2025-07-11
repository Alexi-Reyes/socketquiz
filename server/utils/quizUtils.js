import { rooms } from '../state.js';

export function startQuizCountdown(io, roomName) {
    const room = rooms[roomName];
    if (!room) {
        console.log(`startQuizCountdown: Room ${roomName} not found.`);
        return;
    }

    console.log(`startQuizCountdown: Starting countdown for room ${roomName}`);

    if (room.timerInterval) {
        clearInterval(room.timerInterval);
        console.log(`startQuizCountdown: Cleared existing timer for room ${roomName}`);
    }

    const playersUsernames = Object.values(room.players).map(p => p.username);
    console.log(`startQuizCountdown: Emitting 'quizStartingCountdown' to room ${roomName} with players: ${playersUsernames.join(', ')}`);
    io.to(roomName).emit('quizStartingCountdown', { players: playersUsernames });

    let countdown = 5;
    console.log(`startQuizCountdown: Emitting initial 'timer' value ${countdown} to room ${roomName}`);
    io.to(roomName).emit('timer', countdown);

    room.timerInterval = setInterval(() => {
        countdown--;
        console.log(`startQuizCountdown: Emitting 'timer' value ${countdown} to room ${roomName}`);
        io.to(roomName).emit('timer', countdown);
        if (countdown <= 0) {
            clearInterval(room.timerInterval);
            console.log(`startQuizCountdown: Countdown finished for room ${roomName}. Starting first question.`);
            sendQuestionWithTimer(io, roomName);
        }
    }, 1000);
}

export function startNextQuestionCountdown(io, roomName) {
    const room = rooms[roomName];
    if (!room) return;

    if (room.timerInterval) {
        clearInterval(room.timerInterval);
    }

    const correctAnswer = room.quiz.questions[room.currentQuestionIndex].answer;
    io.to(roomName).emit('answerResult', { correctAnswer });

    // 5s timer
    let countdown = 5;
    io.to(roomName).emit('timer', countdown); 

    room.timerInterval = setInterval(() => {
        countdown--;
        io.to(roomName).emit('timer', countdown);
        if (countdown <= 0) {
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
            io.to(roomName).emit('message', 'Time is up!');
            startNextQuestionCountdown(io, roomName);
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
