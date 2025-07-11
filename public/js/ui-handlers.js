import { socket } from './main.js';
import {
    joinForm,
    usernameInput,
    roomNameInput,
    joinRoomBtn,
    createRoomBtn,
    quizArea,
    scoreArea,
    messagesDiv,
    playerListUl,
    questionDisplay,
    optionsContainer,
    timerDisplay,
    startQuizBtn,
    leaveRoomBtn,
    quizHeader,
    timeLimitInput,
    editQuizBtn,
    editQuizArea,
    questionsListDiv,
    addQuestionBtn,
    saveQuizBtn,
    cancelEditBtn,
    shareQuizBtn
} from './dom-elements.js';
import {
    currentRoomName,
    currentQuestionIndex,
    isCurrentUserHost,
    setCurrentRoomName,
    setTimerInterval,
    updateHostUI,
    createQuestionInputSet
} from './utils.js';

export function setupUIHandlers() {
    editQuizBtn.addEventListener('click', () => {
        editQuizArea.style.display = 'block';
        socket.emit('requestQuizForEdit', currentRoomName);
    });

    cancelEditBtn.addEventListener('click', () => {
        editQuizArea.style.display = 'none';
        quizArea.style.display = 'block';
    });

    addQuestionBtn.addEventListener('click', () => {
        const newQuestionInputSet = createQuestionInputSet();
        questionsListDiv.appendChild(newQuestionInputSet);
    });

    saveQuizBtn.addEventListener('click', () => {
        const questionInputSets = questionsListDiv.querySelectorAll('.question-input-set');
        const updatedQuiz = [];

        let allFieldsFilled = true;
        questionInputSets.forEach(questionInputSet => {
            const questionInput = questionInputSet.querySelector('input[type="text"]');
            const optionInputs = Array.from(questionInputSet.querySelectorAll('input[type="text"][placeholder^="Option"]'));
            const answerInput = questionInputSet.querySelector('input[placeholder="Correct answer"]');

            const question = questionInput.value.trim();
            const options = optionInputs.map(input => input.value.trim());
            const answer = answerInput.value.trim();

            if (question && options.every(option => option !== '') && answer) {
                updatedQuiz.push({ question, options, answer });
            } else {
                allFieldsFilled = false;
            }
        });

        if (!allFieldsFilled) {
            alert('Please fill in all fields for each question.');
            return;
        }

        socket.emit('updateQuiz', { roomName: currentRoomName, quiz: updatedQuiz });
        editQuizArea.style.display = 'none';
        quizArea.style.display = 'block';
    });

    joinForm.addEventListener('submit', (e) => {
        e.preventDefault();
    });

    joinRoomBtn.addEventListener('click', () => {
        const username = usernameInput.value.trim();
        const roomName = roomNameInput.value.trim();
        if (username && roomName) {
            socket.emit('joinRoom', { username, roomName });
            setCurrentRoomName(roomName);
        }
    });

    createRoomBtn.addEventListener('click', () => {
        const username = usernameInput.value.trim();
        const roomName = roomNameInput.value.trim();
        const timeLimit = parseInt(timeLimitInput.value, 10);
        if (username && roomName && !isNaN(timeLimit) && timeLimit >= 5 && timeLimit <= 120) {
            socket.emit('createRoom', { username, roomName, timeLimit });
            setCurrentRoomName(roomName);
            shareQuizBtn.style.display = 'inline-block';
        } else {
            alert('Please enter a valid username, room name, and a time limit between 5 and 120 seconds.');
        }
    });

    shareQuizBtn.addEventListener('click', () => {
        const roomName = currentRoomName;
        if (roomName) {
            const quizLink = `${window.location.origin}?room=${roomName}`;
            navigator.clipboard.writeText(quizLink)
                .then(() => {
                    alert('Quiz link copied to clipboard!');
                })
                .catch(err => {
                    console.error('Failed to copy quiz link: ', err);
                    alert('Failed to copy quiz link. Please copy it manually.');
                });
        }
    });

    timeLimitInput.addEventListener('change', () => {
        if (isCurrentUserHost && currentRoomName) {
            const newTimeLimit = parseInt(timeLimitInput.value, 10);
            if (!isNaN(newTimeLimit) && newTimeLimit >= 5 && newTimeLimit <= 120) {
                socket.emit('setTimeLimit', { roomName: currentRoomName, timeLimit: newTimeLimit });
            } else {
                alert('Please enter a valid time limit between 5 and 120 seconds.');
                timeLimitInput.value = 30;
            }
        }
    });

    startQuizBtn.addEventListener('click', () => {
        if (currentRoomName) {
            socket.emit('startQuiz', currentRoomName);
        }
    });

    leaveRoomBtn.addEventListener('click', () => {
        if (currentRoomName) {
            socket.emit('leaveRoom', currentRoomName);

            joinForm.style.display = 'block';
            quizArea.style.display = 'none';
            scoreArea.style.display = 'none';
            messagesDiv.innerHTML = '';
            playerListUl.innerHTML = ''; 
            questionDisplay.textContent = '';
            optionsContainer.innerHTML = '';
            timerDisplay.textContent = '--';
            quizHeader.style.display = 'none';
            setCurrentRoomName('');
            shareQuizBtn.style.display = 'none';
        }
    });
}
