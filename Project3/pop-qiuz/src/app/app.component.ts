import { Component, Input } from '@angular/core';
import { Question } from './models/Question.model';
import { questions } from './models/Questions.model';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
//data
  quizLength = questions.length;
  currentQuestionIndex = 0;
  currentQuestion = questions[this.currentQuestionIndex];
  isQuizOver =false;
  grade = 0;
  answeredQuestion : Question[] = [];


//methods
  answer(userAnswer :string){
    let answer = questions[this.currentQuestionIndex].answers.indexOf(userAnswer);
    this.currentQuestion.userAnswer = answer;
    this.answeredQuestion.push(this.currentQuestion);
    if(this.isUserCorrect()){
      this.grade += (100/this.quizLength);
    }
    if(this.isExamOver()){
      this.isQuizOver = true;
    }
    else{
      this.currentQuestionIndex++;
      this.currentQuestion = questions[this.currentQuestionIndex];
    }
    console.log("grade" + this.grade);

  }

  private isUserCorrect() :boolean {
      return this.currentQuestion.correctAnswer === this.currentQuestion.userAnswer;
  }

  private isExamOver() {
    return this.quizLength === this.currentQuestionIndex + 1;
  }


 }








