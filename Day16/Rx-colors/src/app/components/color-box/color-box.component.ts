import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-color-box',
  templateUrl: './color-box.component.html',
  styleUrls: ['./color-box.component.css']
})
export class ColorBoxComponent {
  @Input() title :string = 'title';
  @Input() color :string | null = 'red';
  
  constructor() { }



}
