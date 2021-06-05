import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GameServiceService {
  private red = 0;
  private green = 0;
  private blue = 0;
  private ComputerRGB :[number,number,number]= [0, 0, 0];

  private red$ = new BehaviorSubject<number>(this.red);
  private green$ = new BehaviorSubject<number>(this.red);
  private blue$ = new BehaviorSubject<number>(this.red);
  private compColor$ =new BehaviorSubject<[number, number, number]>([0, 0, 0]);

  constructor() { }

  GetRed(): Observable<number>{
    return this.red$.asObservable();
  }

  GetGreen(): Observable<number> {
    return this.green$.asObservable();
  }
  GetBlue(): Observable<number> {
    return this.blue$.asObservable();
  }
   SetRed(value: number): void {
    this.red = value;
    this.red$.next(this.red);
  }
   SetGreen(value: number): void {
    this.green = value
    this.green$.next(this.green);
  }
   SetBlue(value: number): void {
    this.blue = value;
    this.blue$.next(this.blue);
  }
  GetComputerColor(): Observable<[number, number, number]>{
    return this.compColor$.asObservable();
  }
  RandomizeColor(): void{
    let rndRed = Math.ceil(Math.random() * 255);
    let rndGreen = Math.ceil(Math.random() * 255);
    let rndBlue = Math.ceil(Math.random() * 255);
    this.ComputerRGB = [rndRed, rndGreen, rndBlue];
    this.compColor$.next(this.ComputerRGB);
  }

}
