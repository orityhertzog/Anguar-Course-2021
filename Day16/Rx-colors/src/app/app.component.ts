import { Component, OnInit } from '@angular/core';
import { combineLatest, Observable } from 'rxjs';
import { GameServiceService } from './services/game-service.service';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  colorGuess$ !: Observable<string>; 
  colorComp$ !: Observable<string>;
  success$ !: Observable<boolean>;

constructor(private game : GameServiceService){}

myTitle ="Guess";
compTitle ="Computer";
private rgbToString(rgb :[number, number,number]){
  return `rgb(${rgb[0]}, ${rgb[1]}, ${rgb[2]})`;
}

ngOnInit(): void {
  let r$ = this.game.GetRed();
  let g$ = this.game.GetGreen();
  let b$ = this.game.GetBlue();

  this.colorGuess$ = combineLatest([r$, g$, b$]).pipe(map( rgb => this.rgbToString(rgb)));
  this.colorComp$ = this.game.GetComputerColor().pipe(map(rgb => this.rgbToString(rgb)));
  this.success$ = combineLatest([this.colorGuess$, this.colorComp$])
   .pipe(map(col => col[0] === col[1]));

  }

  randomize(){
    this.game.RandomizeColor();
  }





}
