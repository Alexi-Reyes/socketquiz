const quizzes = {
    "general": {
        name: "General Knowledge Quiz",
        questions: [
            {
                question: "What is the capital of France?",
                options: ["Berlin", "Madrid", "Paris", "Rome"],
                answer: "Paris"
            },
            {
                question: "Which planet is known as the Red Planet?",
                options: ["Earth", "Venus", "Jupiter", "Mars"],
                answer: "Mars"
            },
            {
                question: "What is 7 * 8?",
                options: ["49", "64", "56", "72"],
                answer: "56"
            }
        ]
    },
    "science": {
        name: "Science Quiz",
        questions: [
            {
                question: "What is the chemical symbol for water?",
                options: ["H2O", "CO2", "O2", "N2"],
                answer: "H2O"
            },
            {
                question: "What is the smallest prime number?",
                options: ["0", "1", "2", "3"],
                answer: "2"
            }
        ]
    }
};

export default quizzes;
