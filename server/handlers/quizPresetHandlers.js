import quizzes from '../data/quizzes.js';

export const quizPresetHandlers = (io, socket) => {
    // Handle request for quiz presets
    socket.on('requestQuizPresets', () => {
        const presetNames = Object.keys(quizzes);
        socket.emit('quizPresetsLoaded', presetNames);
    });

    // Handle request for a specific preset quiz
    socket.on('requestPresetQuiz', (presetName) => {
        const presetQuiz = quizzes[presetName];
        if (presetQuiz) {
            socket.emit('presetQuizLoaded', presetQuiz.questions);
        } else {
            console.warn(`Preset quiz '${presetName}' not found.`);
        }
    });
};
