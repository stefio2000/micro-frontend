import {Component} from '@angular/core';
import {MatSliderChange} from "@angular/material/slider";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  static readonly CUSTOM_EVENT_NAME: string = 'slider.value';

  change($event: MatSliderChange): void {
    const event = new CustomEvent(AppComponent.CUSTOM_EVENT_NAME, {detail: $event.value});
    window.dispatchEvent(event);
    console.log(`Slider is emitting the value <${$event.value}> `);
  }
}
