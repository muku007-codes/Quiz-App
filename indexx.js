const quizData = [
    {
        question: "What is the full form of OOP?",
        a: "Object oriented programming",
        b: "Oriented object programming",
        c: "Office oriented programming",
        d: "Office objective programming",
        correct: "a",
    },
    {
        question: "Who invented C Language?",
        a: "Charles Babbage",
        b: "Grahambel",
        c: "Dennis Ritchie",
        d: "Steve Jobs",
        correct: "c",
    },
    {
        question: "C is a which level language?",
        a: "Low level",
        b: "High level",
        c: "Low+High",
        d: "None",
        correct: "a",
    },
    {
        question: "A C program is a combination of?",
        a: "Statements",
        b: "Functions",
        c: "Variables",
        d: "All of above",
        correct: "d",
    },
    {
        question: "C is _______ type of programming language?",
        a: "Object Oriented",
        b: "Procedural",
        c: "Bit level language",
        d: "Functional",
        correct: "b",
    },
];

const questionE1 = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");
let currentQuiz = 0;
let score = 0;
loadQuiz();

// function for load all quizData objects(question) on page
function loadQuiz() {
    deSelectAnswer();
    const currentQuizData = quizData[currentQuiz];
    questionE1.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

//this function checks which input radio is selected.It returns #id of radio.
function getSelected() {
    let answer = undefined;

    const answers = document.querySelectorAll(".answer");
    for (let x = 0; x < answers.length; x++) {
        if (answers[x].checked) {
            answer = answers[x].id;
        }
    }
    return answer;
}

//It deselects previous selected radio button
function deSelectAnswer() {
    const answers = document.querySelectorAll(".answer");
    for (let x = 0; x < answers.length; x++) {
        answers[x].checked = false;
    }
}

//checks answer is true or false
submitBtn.addEventListener("click", () => {
    const answer = getSelected();
    if (answer === quizData[currentQuiz].correct) {
        score++;
    }
    document.getElementById("score").innerHTML =
        "Score" + score + "/" + quizData.length;
    currentQuiz++;
    console.log("hello");
    if (currentQuiz < quizData.length) {
        loadQuiz();
    }
    if (currentQuiz === quizData.length) {
        let show1 = document.querySelector(".quiz-container");
        show1.style.visibility = "hidden";

        let show2 = document.querySelector("#finish");
        show2.style.visibility = "visible";
    }
});

function getName() {
    let user = prompt("Please Enter Your Name:)");
    if (user != null) {
        document.getElementById("name").innerHTML = user;
    }
};

getName();
