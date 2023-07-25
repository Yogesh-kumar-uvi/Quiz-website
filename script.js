const question = [
    {
        // Add more questions here...
        question: "Which is the smallest animal in the world?",
        answer: [
            { text: "Paedophryne amauensis Frog", correct: true },
            { text: "Etruscan Shrew", correct: false },
            { text: "Paedocypris progenetica Fish", correct: false },
            { text: "Kitti's Hog-Nose Bat", correct: false },
        ],
    },
    {
        question: "Which is the smallest animal in the world?",
        answer: [
            { text: "Paedophryne amauensis Frog", correct: true },
            { text: "Etruscan Shrew", correct: false },
            { text: "Paedocypris progenetica Fish", correct: false },
            { text: "Kitti's Hog-Nose Bat", correct: false },
        ],
    },
    {
        question: "Which is the smallest animal in the world?",
        answer: [
            { text: "Paedophryne amauensis Frog", correct: true },
            { text: "Etruscan Shrew", correct: false },
            { text: "Paedocypris progenetica Fish", correct: false },
            { text: "Kitti's Hog-Nose Bat", correct: false },
        ], 
    },
    {
        question: "Which is the smallest animal in the world?",
        answer: [
            { text: "Paedophryne amauensis Frog", correct: true },
            { text: "Etruscan Shrew", correct: false },
            { text: "Paedocypris progenetica Fish", correct: false },
            { text: "Kitti's Hog-Nose Bat", correct: false },
        ],
    },
    {
        question: "Which is the smallest animal in the world?",
        answer: [
            { text: "Paedophryne amauensis Frog", correct: true },
            { text: "Etruscan Shrew", correct: false },
            { text: "Paedocypris progenetica Fish", correct: false },
            { text: "Kitti's Hog-Nose Bat", correct: false },
        ],
    },
    {
        question: "Which is the smallest animal in the world?",
        answer: [
            { text: "Paedophryne amauensis Frog", correct: true },
            { text: "Etruscan Shrew", correct: false },
            { text: "Paedocypris progenetica Fish", correct: false },
            { text: "Kitti's Hog-Nose Bat", correct: false },
        ],
    },
    {
        question: "Which is the smallest animal in the world?",
        answer: [
            { text: "Paedophryne amauensis Frog", correct: true },
            { text: "Etruscan Shrew", correct: false },
            { text: "Paedocypris progenetica Fish", correct: false },
            { text: "Kitti's Hog-Nose Bat", correct: false },
        ], 
    },
    {
        question: "Which is the smallest animal in the world?",
        answer: [
            { text: "Paedophryne amauensis Frog", correct: true },
            { text: "Etruscan Shrew", correct: false },
            { text: "Paedocypris progenetica Fish", correct: false },
            { text: "Kitti's Hog-Nose Bat", correct: false },
        ],
    },
    {
        question: "Which is the smallest animal in the world?",
        answer: [
            { text: "Paedophryne amauensis Frog", correct: true },
            { text: "Etruscan Shrew", correct: false },
            { text: "Paedocypris progenetica Fish", correct: false },
            { text: "Kitti's Hog-Nose Bat", correct: false },
        ],
    },
    {
        question: "Which is the smallest animal in the world?",
        answer: [
            { text: "Paedophryne amauensis Frog", correct: true },
            { text: "Etruscan Shrew", correct: false },
            { text: "Paedocypris progenetica Fish", correct: false },
            { text: "Kitti's Hog-Nose Bat", correct: false },
        ],
    }
    
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion() {
    resetState();
    const currentQuestion = question[currentQuestionIndex];
    const questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answer.forEach((answer) => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}

function resetState() {
    nextButton.style.display = "none";
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if (isCorrect) {
        selectedBtn.classList.add("correct");
        score++;
    } else {
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach((button) => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function showScore() {
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${question.length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}

function handleNextButton() {
    currentQuestionIndex++;
    if (currentQuestionIndex < question.length) {
        showQuestion();
    } else {
        showScore();
    }
}

nextButton.addEventListener("click", () => {
    if (currentQuestionIndex < question.length) {
        handleNextButton();
    } else {
        startQuiz();
    }
});

startQuiz();
