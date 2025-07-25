import {
    hostControlsDiv,
    editQuizBtn,
    startQuizBtn,
    timeLimitInput,
    timeLimitInputLabel,
    questionsListDiv,
    quizHeader,
    questionDisplay,
    optionsContainer,
    answerStatusDiv
} from './dom-elements.js';

export let currentRoomName = '';
export let currentQuestionIndex = -1;
export let isCurrentUserHost = false;
export let timerInterval;

export function setCurrentRoomName(name) {
    currentRoomName = name;
}

export function setCurrentQuestionIndex(index) {
    currentQuestionIndex = index;
}

export function setIsCurrentUserHost(isHost) {
    isCurrentUserHost = isHost;
}

export function setTimerInterval(interval) {
    timerInterval = interval;
}


export function updateHostUI(quizStarted = false) {
    if (isCurrentUserHost) {
        hostControlsDiv.style.display = 'block';
        editQuizBtn.style.display = 'inline-block';
    } else {
        hostControlsDiv.style.display = 'none';
        editQuizBtn.style.display = 'none';
    }

    if (quizStarted) {
        startQuizBtn.style.display = 'none';
        timeLimitInput.disabled = true;
        timeLimitInput.style.display = 'none';
        timeLimitInputLabel.style.display = 'none';
        editQuizBtn.style.display = 'none';
        quizHeader.style.display = 'flex';
        questionDisplay.style.display = 'block';
        optionsContainer.style.display = 'block';
        answerStatusDiv.style.display = 'block';
    } else {
        answerStatusDiv.style.display = 'none';
        questionDisplay.style.display = 'none';
        optionsContainer.style.display = 'none';
        startQuizBtn.style.display = 'inline-block';
        timeLimitInput.disabled = false;
        timeLimitInput.style.display = 'inline-block';
        timeLimitInputLabel.style.display = 'inline-block';
        editQuizBtn.style.display = 'inline-block';
        quizHeader.style.display = 'none';
    }
}

export function createQuestionInputSet(question = '', options = ['', '', '', ''], answer = '') {
    const questionDiv = document.createElement('div');
    questionDiv.classList.add('question-input-set');

    const questionLabel = document.createElement('label');
    questionLabel.textContent = 'Question:';
    questionDiv.appendChild(questionLabel);
    const questionInput = document.createElement('input');
    questionInput.type = 'text';
    questionInput.placeholder = 'Enter question';
    questionInput.value = question;
    questionDiv.appendChild(questionInput);

    const optionsRowDiv = document.createElement('div');
    optionsRowDiv.classList.add('question-options-row');

    const optionsLabel = document.createElement('label');
    optionsLabel.textContent = 'Options:';
    optionsRowDiv.appendChild(optionsLabel);

    const optionsContainerDiv = document.createElement('div');
    optionsContainerDiv.classList.add('options-container-edit');
    const optionsInputs = [];
    for (let i = 0; i < 4; i++) {
        const optionInput = document.createElement('input');
        optionInput.type = 'text';
        optionInput.placeholder = `Option ${i + 1}`;
        optionInput.value = options[i] || '';
        optionsInputs.push(optionInput);
        optionsContainerDiv.appendChild(optionInput);
    }
    optionsRowDiv.appendChild(optionsContainerDiv);
    questionDiv.appendChild(optionsRowDiv);

    const answerLabel = document.createElement('label');
    answerLabel.textContent = 'Correct Answer:';
    questionDiv.appendChild(answerLabel);
    const answerInput = document.createElement('input');
    answerInput.type = 'text';
    answerInput.placeholder = 'Correct answer';
    answerInput.value = answer;
    questionDiv.appendChild(answerInput);

    const removeButton = document.createElement('button');
    removeButton.textContent = 'Remove Question';
    removeButton.classList.add('remove-question-btn');
    removeButton.addEventListener('click', () => {
        questionDiv.remove();
    });
    questionDiv.appendChild(removeButton);

    return questionDiv;
}

export function clearQuestionsList() {
    const questionsListDiv = document.getElementById('questions-list');
    if (questionsListDiv) {
        questionsListDiv.innerHTML = '';
    }
}
