"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var exam_1 = require("./exam");
var exam = new exam_1.Exam();
exam.addQuestion({
    question: "how many colors does Pikpok have?",
    answers: [
        "3",
        "2",
        "1",
        "4"
    ],
    correct_answer: 0
});
exam.addQuestion({
    question: "how many colors does Pitzi have?",
    answers: [
        "3",
        "2",
        "1",
        "4"
    ],
    correct_answer: 1
});
exam.addQuestion({
    question: "what kind of dog Abuv is?",
    answers: [
        "a prince dog",
        "an handsome dog",
        "a fattie dog",
        "all answers is correct"
    ],
    correct_answer: 3
});
exam.addQuestion({
    question: "what is wrong with Pitri?",
    answers: [
        "she is a black cat",
        "she has too many kittens to feed ",
        "she has fungens",
        "she has cancer"
    ],
    correct_answer: 2
});
exam.print();
var answer1 = [0, 1, 2, 3]; //50%
console.log(exam.grade(answer1));
var answer2 = [0, 1, 3, 2]; //100%
console.log(exam.grade(answer2));
var answer3 = [1, 1, 1, 1]; //25%
console.log(exam.grade(answer3));
//# sourceMappingURL=main.js.map