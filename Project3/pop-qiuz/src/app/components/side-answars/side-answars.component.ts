import { Component, Input, OnInit } from '@angular/core';
import { Question } from 'src/app/models/Question.model';


@Component({
  selector: 'app-side-answars',
  templateUrl: './side-answars.component.html',
  styleUrls: ['./side-answars.component.css']
})
export class SideAnswarsComponent implements OnInit {
 @Input() summary :Question[] = [];
  constructor() { }

  ngOnInit(): void {
  }

}
