import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BombayComponent } from './bombay.component';

describe('BombayComponent', () => {
  let component: BombayComponent;
  let fixture: ComponentFixture<BombayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BombayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BombayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
