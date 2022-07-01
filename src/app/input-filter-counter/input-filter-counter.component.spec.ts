import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputFilterCounterComponent } from './input-filter-counter.component';

describe('InputFilterCounterComponent', () => {
  let component: InputFilterCounterComponent;
  let fixture: ComponentFixture<InputFilterCounterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputFilterCounterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputFilterCounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
