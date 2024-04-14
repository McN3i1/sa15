const quizData = [
    {
        question: "What is the capital of Tennessee?",
        options: ["Knoxville", "Memphis", "Nashville", "Chattanooga"],
        answer: "Nashville"
    },
    {
        question: "What is 5 x 5?",
        options: ["5", "55", "10", "25"],
        answer: "25"
    },
    {
        question: "What is the powerhouse of the cell?",
        options: ["Mitochondria", "Nucleus", "Vacuole", "Ribosomes"],
        answer: "Mitochondria"
    },
    {
        question: "What color does blue and yellow create?", 
        options: ["Orange", "Green", "Red", "Dark Blue"], 
        answer: "Green"
    }, 
    {
        question: "Who was the first President of the United States of America?", 
        options: ["Barack Obama", "George Bush", "George Washington", "John Adams"],
        answer: "George Washington"
    }
];

let currentQuestion = 0;
let score = 0;

const questionElement = document.getElementById("question");
const optionButtonsElement = document.getElementById("option-buttons");
const nextButton = document.getElementById("next-button");
const resultElement = document.getElementById("result");

function showQuestion(question) {
    questionElement.innerText = question.question;
    optionButtonsElement.innerHTML = "";
    question.options.forEach(option => {
        const button = document.createElement("button");
        button.innerText = option;
        button.classList.add("btn");
        button.addEventListener("click", () => selectOption(option));
        optionButtonsElement.appendChild(button);
    });
}

function selectOption(selectedOption) {
    const question = quizData[currentQuestion];
    if (selectedOption === question.answer) {
        score++;
    }
    nextButton.disabled = false;

    const buttons = optionButtonsElement.querySelectorAll('.btn');

    buttons.forEach(button => {
        if (button.innerText === selectedOption) {
            button.classList.add('selected');
        } else {
            button.disabled = true;
        }
    });

    nextButton.disabled = false;
}



function showResult() {
    resultElement.innerText = `Your score is ${score} out of ${quizData.length}.`;
}

function nextQuestion() {
    currentQuestion++;
    if (currentQuestion < quizData.length) {
        showQuestion(quizData[currentQuestion]);
        nextButton.disabled = true;
    } else {
        document.getElementById("question-container").style.display = 'none';
        resultElement.innerText = `Quiz finished! Your score is ${score} out of ${quizData.length}.`;
        nextButton.style.display = "none"
    }
}

showQuestion(quizData[currentQuestion]);

