import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TitleComponent } from './components/title/title.component';
import { QuestionsComponent } from './components/questions/questions.component';
import { SideAnswarsComponent } from './components/side-answars/side-answars.component';
import { EndQuizComponent } from './components/end-quiz/end-quiz.component';

@NgModule({
  declarations: [
    AppComponent,
    TitleComponent,
    QuestionsComponent,
    SideAnswarsComponent,
    EndQuizComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
