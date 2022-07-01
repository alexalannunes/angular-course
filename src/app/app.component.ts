import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'angular-course';

  count = 0;

  filterCount = {};

  handleChangeCount(e: number) {
    console.log(e);
  }

  handleChange(e: any) {
    this.filterCount = e;
  }
}
