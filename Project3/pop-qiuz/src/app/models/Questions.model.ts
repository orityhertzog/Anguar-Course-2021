import { Question } from "./Question.model";

export let questions :Question[] =
[
    {
        caption: '4 + 2 * 3',
        answers: ['10','18', '3', '1'],
        correctAnswer: 0,
        userAnswer: -1
    },

    {
        caption: '6 / 2 * (2 + 1)',
        answers: ['1','9', '12', '4'],
        correctAnswer: 1,
        userAnswer: -1

    },
    
    {
        caption: '5 + 4 * 3',
        answers: ['27','28', '17', '16'],
        correctAnswer: 2,
        userAnswer: -1
    },
    {
        caption: '16 * 2 / 4 + 6',
        answers: ['3.2','102', '17', '14'],
        correctAnswer: 3,
        userAnswer: -1
    }

]