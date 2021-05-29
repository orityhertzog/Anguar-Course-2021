import { style } from '@angular/animations';
import { Component, OnInit , Input, Output, EventEmitter} from '@angular/core';
import { Question } from 'src/app/models/Question.model';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {
  @Input()
  currentQuestion!: Question;
  @Output() answerSelected = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }

setAnswerSelected(answer :string){
  this.answerSelected.emit(answer);
}
}
