import { socket } from './main.js';
import {
    joinForm,
    quizArea,
    scoreArea,
    timeLimitInput,
    messagesDiv,
    playerListUl,
    questionDisplay,
    optionsContainer,
    timerDisplay,
    finalScoresList,
    questionsListDiv,
    editQuizArea, quizHeader
} from './dom-elements.js';
import {
    currentRoomName,
    currentQuestionIndex,
    timerInterval,
    setCurrentQuestionIndex,
    setIsCurrentUserHost,
    setTimerInterval,
    updateHostUI,
    createQuestionInputSet
} from './utils.js';

export function setupSocketEvents() {
    socket.on('roomCreated', ({ roomName, isHost, timeLimit }) => {
        joinForm.style.display = 'none';
        quizArea.style.display = 'block';
        scoreArea.style.display = 'none';
        quizHeader.style.display = 'flex'; 

        setIsCurrentUserHost(isHost);
        timeLimitInput.value = timeLimit; 
        updateHostUI();
        console.log(`Room ${roomName} successfully created and joined. Is host: ${isHost}, Time Limit: ${timeLimit}`);
    });

    socket.on('roomJoined', ({ roomName, isHost, timeLimit, quizStarted }) => {
        joinForm.style.display = 'none';
        quizArea.style.display = 'block';
        scoreArea.style.display = 'none';
        quizHeader.style.display = 'flex'; 

        setIsCurrentUserHost(isHost);
        timeLimitInput.value = timeLimit; 
        updateHostUI(quizStarted);
        console.log(`Joined room ${roomName}. Is host: ${isHost}, Time Limit: ${timeLimit}, Quiz Started: ${quizStarted}`);
    });

    socket.on('message', (msg) => {
        const item = document.createElement('div');
        item.textContent = msg;
        if (msg.includes('Correct answer!')) {
            item.classList.add('message-correct');
        } else if (msg.includes('Wrong answer.')) {
            item.classList.add('message-incorrect');
        } else if (msg.includes('All players have answered!')) {
            item.classList.add('message-all-answered');

            // 3s countdown
            let countdown = 3;
            timerDisplay.textContent = `${countdown}`;
            if (timerInterval) {
                clearInterval(timerInterval);
            }
            setTimerInterval(setInterval(() => {
                countdown--;
                if (countdown > 0) {
                    timerDisplay.textContent = `${countdown}`;
                } else {
                    clearInterval(timerInterval);
                    setTimerInterval(null); 
                    timerDisplay.textContent = '--';
                }
            }, 1000));
        } else if (msg.includes('Quiz has ended!')) {
            item.classList.add('message-end-quiz');
        }
        messagesDiv.appendChild(item);
        messagesDiv.scrollTop = messagesDiv.scrollHeight;
    });

    socket.on('error', (msg) => {
        alert(`Error: ${msg}`);
        joinForm.style.display = 'block';
        quizArea.style.display = 'none';
        scoreArea.style.display = 'none';
        quizHeader.style.display = 'none';
    });

    socket.on('playerList', (players) => {
        playerListUl.innerHTML = '';
        const colors = ['#FF5733', '#33FF57', '#3366FF', '#FF33CC', '#33FFFF'];
        players.forEach((player, index) => {
            const li = document.createElement('li');
            li.style.border = `solid 2px ${colors[index % colors.length]}`;
            li.innerHTML = `${player.username} <span class="score">${player.score}</span>`;
            playerListUl.appendChild(li);
        });
    });

    socket.on('question', (data) => {
        questionDisplay.textContent = data.question;
        optionsContainer.innerHTML = '';
        setCurrentQuestionIndex(data.index);

        // reset timer
        if (timerInterval) {
            clearInterval(timerInterval);
            setTimerInterval(null);
        }
        timerDisplay.textContent = '--';
        updateHostUI(true);

        // renable options
        Array.from(optionsContainer.children).forEach(btn => btn.disabled = false);

        data.options.forEach(option => {
            const button = document.createElement('button');
            button.textContent = option;
            button.classList.add('option-button');
            button.addEventListener('click', () => {
                socket.emit('submitAnswer', { roomName: currentRoomName, questionIndex: currentQuestionIndex, answer: option });

                // disable options
                Array.from(optionsContainer.children).forEach(btn => btn.disabled = true);
            });
            optionsContainer.appendChild(button);
        });
    });

    socket.on('timer', (timeLeft) => {
        timerDisplay.textContent = `${timeLeft}`;
        if (timeLeft <= 0) {
            // disable options
            Array.from(optionsContainer.children).forEach(btn => btn.disabled = true);
        }
    });

    socket.on('updateScores', (players) => {
        playerListUl.innerHTML = '';
        const colors = ['#FF5733', '#33FF57', '#3366FF', '#FF33CC', '#33FFFF'];
        players.forEach((player, index) => {
            const li = document.createElement('li');
            li.style.border = `solid 2px ${colors[index % colors.length]}`;
            li.innerHTML = `${player.username} <span class="score">${player.score}</span>`;
            playerListUl.appendChild(li);
        });
    });

    socket.on('quizEnd', (finalScores) => {
        quizArea.style.display = 'none';
        timerDisplay.textContent = '--';
        quizHeader.style.display = 'none';
        scoreArea.style.display = 'block';

        finalScoresList.innerHTML = '';
        finalScores.forEach(player => {
            const li = document.createElement('li');
            li.textContent = `${player.username}: ${player.score} points`;
            finalScoresList.appendChild(li);
        });
        updateHostUI(false);
    });

    socket.on('loadQuizForEdit', (quiz) => {
        console.log('Received quiz data for editing:', quiz);
        questionsListDiv.innerHTML = '';
        quiz.forEach(question => {
            const questionInputSet = createQuestionInputSet(question.question, question.options, question.answer);
            questionsListDiv.appendChild(questionInputSet);
        });
        console.log('Quiz data loaded into edit area.');
    });
}
