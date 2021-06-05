import { Component, OnInit } from '@angular/core';
import { GameServiceService } from 'src/app/services/game-service.service';

@Component({
  selector: 'app-rgb-editor',
  templateUrl: './rgb-editor.component.html',
  styleUrls: ['./rgb-editor.component.css']
})
export class RgbEditorComponent {

  constructor(private game: GameServiceService) { }

  setRed(value :string){
    let val =Number(value);
    this.game.SetRed(val);
  }

  setGreen(value :string){
    let val =Number(value);
    this.game.SetGreen(val);
  }

  setBlue(value :string){
    let val =Number(value);
    this.game.SetBlue(val);
  }
}
