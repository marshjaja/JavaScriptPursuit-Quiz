const question = document.getElementById("question");
const choices = Array.from(document.getElementsByClassName("choice-text"));
const progressText = document.getElementById("progressText");
const scoreText = document.getElementById("scoreText");
const progressBarFull = document.getElementById("progressBarFull");

let currentQuestion = {};
let acceptingAnswers = false;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];

let questions = [
	{
		question: "Inside which HTML element do we put the JavaScript?",

		choice1: "<javascript>",
		choice2: "<js>",
		choice3: "<script>",
		choice4: "<scripting>",
		answer: 3,
	},
	{
		question: "What is the correct way to create a function in JavaScript?",
		choice1: "function: myFunction() {}",
		choice2: "def myFunction() {}",
		choice3: "create myFunction() {}",
		choice4: "function myFunction() {}",
		answer: 4,
	},
	{
		question: "Which method is used to print something in the console?",
		choice1: "print()",
		choice2: "log()",
		choice3: "display()",
		choice4: "console()",
		answer: 2,
	},
	{
		question: "What does 'NaN' stand for in JavaScript?",
		choice1: "Not a Notice",
		choice2: "Not a Null",
		choice3: "Not a Number",
		choice4: "Never-ending Algorithm",
		answer: 3,
	},
	{
		question: "What is the result of the expression '3' + 2 in JavaScript?",
		choice1: "5",
		choice2: "32",
		choice3: "6",
		choice4: "Error",
		answer: 2,
	},
];

//CONSTANTS FOR GAME
const SCORE_POINTS = 10;
const MAX_QUESTIONS = 3;

const startQuiz = () => {
	questionCounter = 0;
	score = 0;
	availableQuestions = [...questions];
	getNextQuestion();
};

const getNextQuestion = () => {
	if (availableQuestions.length === 0 || questionCounter >= MAX_QUESTIONS) {
		//return "HOME"
		return window.location.assign("/index.html");
	}

	questionCounter = Math.min(questionCounter + 1, MAX_QUESTIONS);
	progressText.innerHTML = `Question ${questionCounter} / ${MAX_QUESTIONS}`;

	progressBarFull.style.width = `${(questionCounter / MAX_QUESTIONS) * 100}%`;

	const questionIndex = Math.floor(Math.random() * availableQuestions.length);
	currentQuestion = availableQuestions[questionIndex];
	question.innerHTML = currentQuestion.question;

	choices.forEach((choice) => {
		const number = choice.dataset["number"];
		choice.innerText = currentQuestion["choice" + number];
	});

	availableQuestions.splice(questionIndex, 1);
	acceptingAnswers = true;
};

choices.forEach((choice) => {
	choice.addEventListener("click", (e) => {
		console.log(e.target);
		if (!acceptingAnswers) return;
		acceptingAnswers = false;

		const selectedChoice = e.target;
		const selectedAnswer = selectedChoice.dataset["number"];

		let selectClassToApply = "incorrect";
		if (selectedAnswer == currentQuestion.answer) {
			selectClassToApply = "correct";
		}
		if (selectClassToApply === "correct") {
			incrementScore(SCORE_POINTS);
		}

		selectedChoice.parentElement.classList.add(selectClassToApply);
		setTimeout(() => {
			selectedChoice.parentElement.classList.remove(selectClassToApply);

			getNextQuestion();
		}, 1000);
	});
});

const incrementScore = (num) => {
	score += num;
	scoreText.innerHTML = score;
};
startQuiz();
