#! /usr/bin/env node
import inquirer from "inquirer";

class Question {
    question: string;
    choices: string[];
    correctAnswer: string;

    constructor(question: string, choices: string[], correctAnswer: string) {
        this.question = question;
        this.choices = choices;
        this.correctAnswer = correctAnswer;
    }
}

class Quiz {
    questions: Question[];
    score: number;

    constructor(questions: Question[]) {
        this.questions = questions;
        this.score = 0;
    }

    async startQuiz() {
        console.log("Welcome to the Quiz!");
        console.log("Answer the following questions:");

        for (let i = 0; i < this.questions.length; i++) {
            const { answer } = await inquirer.prompt({
                name: "answer",
                type: "list",
                message: this.questions[i].question,
                choices: this.questions[i].choices
            });

            if (answer === this.questions[i].correctAnswer) {
                console.log("Correct!");
                this.score++;
            } else {
                console.log("Incorrect!");
            }
        }

        console.log(`Quiz ended. Your score: ${this.score}/${this.questions.length}`);
    }
}

const questions = [
    new Question("What is the capital of France?", ["Paris", "London", "Berlin", "Rome"], "Paris"),
    new Question("Which planet is known as the Red Planet?", ["Earth", "Mars", "Venus", "Jupiter"], "Mars"),
    new Question("Who is the author of 'To Kill a Mockingbird'?", ["Harper Lee", "Stephen King", "J.K. Rowling", "Ernest Hemingway"], "Harper Lee"),
    new Question("What is the largest mammal?", ["Elephant", "Blue Whale", "Giraffe", "Hippopotamus"], "Blue Whale"),
    new Question("Which country is known as the Land of the Rising Sun?", ["China", "Japan", "India", "South Korea"], "Japan"),
    new Question("Who painted the Mona Lisa?", ["Vincent van Gogh", "Pablo Picasso", "Leonardo da Vinci", "Michelangelo"], "Leonardo da Vinci"),
    new Question("What is the chemical symbol for water?", ["H2O", "CO2", "NaCl", "O2"], "H2O"),
    new Question("Which gas is most abundant in Earth's atmosphere?", ["Oxygen", "Nitrogen", "Carbon dioxide", "Argon"], "Nitrogen"),
    new Question("Which is the largest ocean on Earth?", ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"], "Pacific Ocean"),
    new Question("What is the capital of Australia?", ["Sydney", "Melbourne", "Canberra", "Perth"], "Canberra")
];

const quiz = new Quiz(questions);
quiz.startQuiz();
