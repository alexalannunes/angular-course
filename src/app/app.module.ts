import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { MyFormModule } from './my-form/my-form.module';
import { InputPropertyComponent } from './input-property/input-property.component';
import { CounterComponent } from './counter/counter.component';

@NgModule({
  declarations: [AppComponent, InputPropertyComponent, CounterComponent],
  imports: [BrowserModule, NgbModule, FormsModule, MyFormModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
