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
    },
    {
        "question": "Qual é a função principal da equipe de Entrada de Dados em um projeto de construção?",
        "answers": [
            { "text": "Gerenciamento de equipe", "correct": false },
            { "text": "Registro de informações", "correct": true },
            { "text": "Marketing de projetos", "correct": false },
            { "text": "Manutenção de equipamentos", "correct": false }
        ]
    },
    {
        "question": "O que significa \"QA\" no contexto de entrada de dados?",
        "answers": [
            { "text": "Qualidade Assegurada", "correct": true },
            { "text": "Análise Quantitativa", "correct": false },
            { "text": "Aprovação de Qualidade", "correct": false },
            { "text": "Ajuste de Quantidade", "correct": false }
        ]
    },
    {
        "question": "Qual é a importância da precisão dos dados na entrada de informações de um novo projeto?",
        "answers": [
            { "text": "Não é importante", "correct": false },
            { "text": "Facilita tomadas de decisão precisas", "correct": true },
            { "text": "Aumenta o custo do projeto", "correct": false },
            { "text": "Reduz a eficiência da equipe", "correct": false }
        ]
    },
    {
        "question": "Quais são os métodos comuns de verificação de dados utilizados pela equipe de Entrada de Dados?",
        "answers": [
            { "text": "Revisão por pares e validação de dados", "correct": true },
            { "text": "Cálculos complexos e análise estatística", "correct": false },
            { "text": "Treinamento de novos funcionários", "correct": false },
            { "text": "Contratação de consultores externos", "correct": false }
        ]
    },
    {
        "question": "Qual é a diferença entre validação e verificação de dados?",
        "answers": [
            { "text": "Não há diferença", "correct": false },
            { "text": "Validação confirma a precisão, verificação confirma a correção", "correct": true },
            { "text": "Verificação é realizada primeiro, validação é realizada após", "correct": false },
            { "text": "Validação é automática, verificação é manual", "correct": false }
        ]
    },
    {
        "question": "Como a equipe de Entrada de Dados pode garantir a consistência nos registros de projetos de construção?",
        "answers": [
            { "text": "Utilizando diferentes formatos de arquivo", "correct": false },
            { "text": "Realizando auditorias internas semanalmente", "correct": false },
            { "text": "Seguindo padrões de entrada de dados e procedimentos estabelecidos", "correct": true },
            { "text": "Ignorando solicitações de mudança dos clientes", "correct": false }
        ]
    },
    {
        "question": "Qual é a melhor prática para lidar com discrepâncias nos dados durante a entrada inicial?",
        "answers": [
            { "text": "Ignorar discrepâncias menores", "correct": false },
            { "text": "Registrar discrepâncias, investigar e corrigir conforme necessário", "correct": true },
            { "text": "Alterar os dados para refletir as expectativas do cliente", "correct": false },
            { "text": "Aguardar a confirmação do cliente antes de fazer alterações", "correct": false }
        ]
    },
    {
        "question": "Qual é a função do software de gerenciamento de dados na equipe de Entrada de Dados?",
        "answers": [
            { "text": "Nenhuma função", "correct": false },
            { "text": "Armazenamento e organização de dados", "correct": true },
            { "text": "Geração de relatórios financeiros", "correct": false },
            { "text": "Controle de estoque de materiais", "correct": false }
        ]
    },
    {
        "question": "O que é um procedimento de \"double-entry\" na entrada de dados?",
        "answers": [
            { "text": "Entrar dados duas vezes para garantir precisão", "correct": true },
            { "text": "Permitir que dois funcionários diferentes entrem com os mesmos dados", "correct": false },
            { "text": "Alternar entre dois sistemas de entrada de dados", "correct": false },
            { "text": "Dividir a carga de trabalho entre duas equipes", "correct": false }
        ]
    },
    {
        "question": "Por que a revisão e validação de dados são etapas cruciais antes de confirmar a entrada final?",
        "answers": [
            { "text": "Aumenta o número de erros", "correct": false },
            { "text": "Reduz a precisão dos dados", "correct": false },
            { "text": "Garante a consistência e a qualidade dos dados", "correct": true },
            { "text": "Atrasa o projeto", "correct": false }
        ]
    },
    {
        "question": "Qual é a melhor prática para garantir a segurança dos dados durante o processo de entrada?",
        "answers": [
            { "text": "Compartilhar dados abertamente com terceiros", "correct": false },
            { "text": "Utilizar software de criptografia", "correct": true },
            { "text": "Não fazer backup dos dados", "correct": false },
            { "text": "Deixar os dados sem proteção", "correct": false }
        ]
    },
    {
        "question": "O que é um \"padrão de entrada de dados\" e por que é importante segui-lo?",
        "answers": [
            { "text": "Não há importância", "correct": false },
            { "text": "Um método específico para digitar dados", "correct": true },
            { "text": "Economiza tempo e evita erros", "correct": false },
            { "text": "Divulgação de dados para clientes", "correct": false }
        ]
    },
    {
        "question": "Qual edge é comumente utilizado na True Homes?",
        "answers": [
            { "text": "Island", "correct": false },
            { "text": "4 x 3 holes", "correct": false },
            { "text": "bal edge", "correct": false },
            { "text": "eased", "correct": true }
        ]
    },
    {
        "question": "Como determinar qual material utilizar?",
        "answers": [
            { "text": "Plot Plan", "correct": false },
            { "text": "Plan", "correct": false },
            { "text": "StoneApp", "correct": false },
            { "text": "Selection", "correct": true }
        ]
    },
    {
        "question": "Qual é a função principal da equipe de entrada de dados em uma construtora?",
        "answers": [
            { "text": "Gerenciamento de equipe", "correct": false },
            { "text": "Registro de informações", "correct": true },
            { "text": "Marketing de projetos", "correct": false },
            { "text": "Manutenção de equipamentos", "correct": false }
        ]
    },
    {
        "question": "O que significa 'QA' na entrada de dados?",
        "answers": [
            { "text": "Qualidade Assegurada", "correct": true },
            { "text": "Análise Quantitativa", "correct": false },
            { "text": "Aprovação de Qualidade", "correct": false },
            { "text": "Ajuste de Quantidade", "correct": false }
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
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer)
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

    Array.from(answerButtons.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";

}

function showScore() {
    resetState();
    questionElement.innerHTML = `Seu score ${score} de ${questions.length}!`;
    nextButton.innerHTML = "Tente de novo";
    nextButton.style.display = "block";
}

function handleNextButton() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showScore();
    }
};

nextButton.addEventListener("click", () => {
    if (currentQuestionIndex < questions.length) {
        handleNextButton();
    } else {
        startQuiz();
    }
});
startQuiz();

