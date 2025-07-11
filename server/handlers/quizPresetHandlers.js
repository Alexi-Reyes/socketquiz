import quizzes from '../data/quizzes.js';

export const quizPresetHandlers = (io, socket) => {
    socket.on('requestQuizPresets', () => {
        const presetNames = Object.keys(quizzes);
        socket.emit('quizPresetsLoaded', presetNames);
    });

    socket.on('requestPresetQuiz', (presetName) => {
        const presetQuiz = quizzes[presetName];
        if (presetQuiz) {
            socket.emit('presetQuizLoaded', presetQuiz.questions);
        } else {
            console.warn(`Preset quiz '${presetName}' not found.`);
        }
    });
};
