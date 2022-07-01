import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss'],
})
export class CounterComponent implements OnInit {
  @Input() count = 0;

  @Output() event = new EventEmitter<number>();
  @ViewChild('opa') opa!: ElementRef<HTMLInputElement>;
  constructor() {}

  inc() {
    this.count += 1;
    this.event.emit(this.count);
    console.log(this.opa.nativeElement.value);
  }

  dec() {
    this.count -= 1;
    this.event.emit(this.count);
  }

  ngOnInit(): void {}
}
