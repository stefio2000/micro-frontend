import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  static readonly CUSTOM_EVENT_NAME: string = 'counter.value';

  @Input('initial-value') initialValue?: number;

  count: number = 0;

  private emit(): void {
    const event = new CustomEvent(AppComponent.CUSTOM_EVENT_NAME, { detail: this.count });
    window.dispatchEvent(event);
    console.log(`Counter is emitting the value <${this.count}> `);
  }

  ngOnInit(): void {
    if (this.initialValue) {
      console.log(`Counter is setting the initial count value to <${this.initialValue}> `);
      this.count = this.initialValue;
    }
  }

  add(): void {
    this.count++;
    this.emit();
  }

  substract(): void {
    this.count--;
    this.emit();
  }
}
