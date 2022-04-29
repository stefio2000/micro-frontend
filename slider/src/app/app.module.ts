import { Injector, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { createCustomElement } from '@angular/elements';
import { AppComponent } from './app.component';
import {MatSliderModule} from "@angular/material/slider";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MatSliderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {


  constructor(private injector: Injector) {
    const el = createCustomElement(AppComponent, { injector });
    // @ts-ignore
    customElements.define('stefio2000-slider', el);
  }

  ngDoBootstrap() { }
}

