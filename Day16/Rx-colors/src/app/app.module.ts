import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RgbEditorComponent } from './components/rgb-editor/rgb-editor.component';
import { ColorBoxComponent } from './components/color-box/color-box.component';

@NgModule({
  declarations: [
    AppComponent,
    RgbEditorComponent,
    ColorBoxComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
