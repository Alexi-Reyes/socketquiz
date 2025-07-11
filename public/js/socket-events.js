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
    editQuizArea,
    quizHeader,
    answerStatusDiv
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

    socket.on('quizStartingCountdown', ({ players }) => {
        console.log('quizStartingCountdown event received. Players:', players);
        quizArea.style.display = 'block';
        scoreArea.style.display = 'none';
        quizHeader.style.display = 'flex';

        messagesDiv.innerHTML = '';
        const countdownMessage = document.createElement('div');
        countdownMessage.classList.add('message-countdown');
        countdownMessage.textContent = 'Quiz starting in...';
        messagesDiv.appendChild(countdownMessage);

        const playersList = document.createElement('div');
        playersList.classList.add('message-players-list');
        playersList.textContent = 'Players: ' + players.join(', ');
        messagesDiv.appendChild(playersList);

        messagesDiv.scrollTop = messagesDiv.scrollHeight;
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
        const colors = ['#8e44ad', '#2980b9', '#27ae60', '#f1c40f', '#e67e22'];
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

        if (timerInterval) {
            clearInterval(timerInterval);
            setTimerInterval(null);
        }
        timerDisplay.textContent = '--';
        updateHostUI(true);
        answerStatusDiv.style.display = 'none';

        data.options.forEach(option => {
            const button = document.createElement('button');
            button.textContent = option;
            button.classList.add('option-button');
            button.style.backgroundColor = '';
            button.addEventListener('click', () => {
                socket.emit('submitAnswer', { roomName: currentRoomName, questionIndex: currentQuestionIndex, answer: option });
                Array.from(optionsContainer.children).forEach(btn => btn.disabled = true);
                answerStatusDiv.style.display = 'block';
            });
            optionsContainer.appendChild(button);
        });
    });

    socket.on('timer', (timeLeft) => {
        timerDisplay.textContent = `${timeLeft}`;
    });

    socket.on('answerResult', ({ correctAnswer }) => {
        const buttons = optionsContainer.querySelectorAll('.option-button');
        buttons.forEach(button => {
            if (button.textContent === correctAnswer) {
                button.style.backgroundColor = '#2ecc71';
            } else {
                button.style.backgroundColor = '#e74c3c';
            }
            button.disabled = true;
        });
    });

    socket.on('updateScores', (players) => {
        playerListUl.innerHTML = '';
        const colors = ['#8e44ad', '#2980b9', '#27ae60', '#f1c40f', '#e67e22'];
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

        const podiumPlaces = {
            first: document.querySelector('.podium-place.first'),
            second: document.querySelector('.podium-place.second'),
            third: document.querySelector('.podium-place.third')
        };

        podiumPlaces.first.querySelector('.podium-name').textContent = '';
        podiumPlaces.first.querySelector('.podium-score').textContent = '';
        podiumPlaces.second.querySelector('.podium-name').textContent = '';
        podiumPlaces.second.querySelector('.podium-score').textContent = '';
        podiumPlaces.third.querySelector('.podium-name').textContent = '';
        podiumPlaces.third.querySelector('.podium-score').textContent = '';

        podiumPlaces.first.style.display = 'flex';
        podiumPlaces.second.style.display = 'flex';
        podiumPlaces.third.style.display = 'flex';

        const otherPlayersList = document.getElementById('other-players-list');
        otherPlayersList.innerHTML = '';

        finalScores.forEach((player, index) => {
            if (index === 0) {
                podiumPlaces.first.querySelector('.podium-name').textContent = player.username;
                podiumPlaces.first.querySelector('.podium-score').textContent = player.score;
            } else if (index === 1) {
                podiumPlaces.second.querySelector('.podium-name').textContent = player.username;
                podiumPlaces.second.querySelector('.podium-score').textContent = player.score;
            } else if (index === 2) {
                podiumPlaces.third.querySelector('.podium-name').textContent = player.username;
                podiumPlaces.third.querySelector('.podium-score').textContent = player.score;
            } else {
                const li = document.createElement('li');
                li.innerHTML = `<span>${index + 1}. ${player.username}</span><span>${player.score}</span>`;
                otherPlayersList.appendChild(li);
            }
        });

        if (finalScores.length < 3) {
            podiumPlaces.third.style.display = 'none';
        }
        if (finalScores.length < 2) {
            podiumPlaces.second.style.display = 'none';
        }
        if (finalScores.length < 1) {
            podiumPlaces.first.style.display = 'none';
        }

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
