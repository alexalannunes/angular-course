import { Component, EventEmitter, OnInit, Output } from '@angular/core';

interface Item {
  id: number;
  name: string;
  key: string;
  count: number;
  min: number;
  max: number;
}

@Component({
  selector: 'app-input-filter-counter',
  templateUrl: './input-filter-counter.component.html',
  styleUrls: ['./input-filter-counter.component.scss'],
})
export class InputFilterCounterComponent implements OnInit {
  itens = [
    {
      id: 1,
      name: 'Crianças',
      key: 'criancas',
      count: 0,
      min: 0,
      max: 3,
    },
    {
      id: 2,
      name: 'Bagagens',
      key: 'bagagens',
      count: 1,
      min: 1,
      max: 2,
    },
  ];

  @Output() handleChange = new EventEmitter<Item[]>();
  constructor() {}

  findById(id: number) {
    return this.itens.slice().find((i) => i.id === id);
  }

  handleIncrement(id: number) {
    const item = this.findById(id);
    if (item) {
      item.count += 1;
      this.handleChange.emit(this.itens);
    }
  }

  handleDecrement(id: number) {
    const item = this.findById(id);

    if (item) {
      item.count -= 1;
      this.handleChange.emit(this.itens);
    }
  }

  ngOnInit(): void {}
}
