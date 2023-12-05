const question = document.getElementById("questions");
const choices = Array.from(document.getElementsByClassName("choice-text"));

let currentQuestion = {};
let acceptingAnswers = true;
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
	console.log(availableQuestions);
};
startQuiz();
