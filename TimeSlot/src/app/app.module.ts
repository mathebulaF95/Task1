import {NgModule} from '@angular/core';
import {MatSliderModule} from '@angular/material/slider';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
@NgModule({
    declarations: [
      AppComponent
    ],
    imports: [
      BrowserModule
    ],
    providers: [],
    bootstrap: [AppComponent]
  })
  export class AppModule { }
@NgModule({
exports: [
MatSliderModule,

] })
export class SliderDemo {}
