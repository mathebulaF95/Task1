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
export class checkSlotAvailability (time,jobLength, date, availability {
 checkSlotAvailablility (9,1, '2016-05-20', [9, 10, 14, 15, 16, 17]);
 checkSlotAvailablility (10,1, '2016-05-20', [9, 10, 14, 15, 16, 17]);
 checkSlotAvailablility (11,1, '2016-05-20', [9, 10, 14, 15, 16, 17]);
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
