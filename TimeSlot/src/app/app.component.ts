import {Component} from '@angular/core';
/**
* @title Slider demo.
*/
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
  })
  export class AppComponent {
    title = 'time-slot';
  }
@Component({
selector: 'slider-demo',
templateUrl: 'demo.slider.component.html',
styleUrls: ['demo.slider.component.css'],
})
export class SliderFormattingExample {
slidervalue: number =9;
formatLabel(val: number) {
if (val >= 10) {
this.slidervalue = val;
return val;
}
return val;
}
}
