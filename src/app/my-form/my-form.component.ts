import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-my-form',
  templateUrl: './my-form.component.html',
  styleUrls: ['./my-form.component.scss'],
})
export class MyFormComponent implements OnInit {
  name = 'alex';

  constructor() {}

  ngOnInit(): void {}
}
