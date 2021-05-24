import { Question } from "./Question";

export class Exam{
    private questions: Question[] = [];

    addQuestion(question : Question){
        this.questions.push(question);
    };

    print(){
        this.questions.forEach(question => {
            console.log(question.question);
            for(let index in question.answers){
                console.log(index+". "+question.answers[index]);
            }
            console.log("----------------------------------------------------")
        });
       
    };

    grade(answers : number[]): number {
        let count_right_answers = 0;
        for(let answer in answers){
            if(answers[answer] == this.questions[answer].correct_answer){
                count_right_answers++;
            }
        }
        return (count_right_answers / this.questions.length)* 100;
    };


}