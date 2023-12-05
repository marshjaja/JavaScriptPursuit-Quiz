import { questions } from "./questions";
const questionsDiv = document.getElementById("questions");
const choices = Array.from(document.getElementsByClassName("choice-text"));

let currentQuestion = {};
let acceptingAnswers = true;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];

//CONSTANTS FOR GAME
const SCORE_POINTS = 10;
const MAX_QUESTIONS = 3;

startQuiz = () => {
	questionCounter = 0;
	score = 0;
	availableQuestions = [...questions];
	console.log([...questions]);
};
startQuiz();
