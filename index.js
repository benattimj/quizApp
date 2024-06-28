const questions = [
    {
        question: "Qual edge usamos frequentemente na true homes?",
        answers: [
            { text: "Island", correct: false },
            { text: "4 x 3 holes", correct: false },
            { text: "bal edge", correct: false },
            { text: "eased", correct: true },

        ]
    },
    {
        question: "Como saber qual material utilizar?",
        answers: [
            { text: "Plot Plan", correct: false },
            { text: "Plan", correct: false },
            { text: "StoneApp", correct: false },
            { text: "Selection", correct: true },


        ]
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
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + "." + currentQuestion.
        question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
    });
}


function resetState() {
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

startQuiz();

