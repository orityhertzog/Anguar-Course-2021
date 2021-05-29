import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-end-quiz',
  templateUrl: './end-quiz.component.html',
  styleUrls: ['./end-quiz.component.css']
})
export class EndQuizComponent implements OnInit {
 @Input() userGrade = 0;
  constructor() { }

  ngOnInit(): void {
  }

}
