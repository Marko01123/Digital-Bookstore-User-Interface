import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RateBookComponent } from './rate-book.component';

describe('RateBookComponent', () => {
  let component: RateBookComponent;
  let fixture: ComponentFixture<RateBookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RateBookComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RateBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
