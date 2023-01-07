import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LiliComponent } from './lili.component';

describe('LiliComponent', () => {
  let component: LiliComponent;
  let fixture: ComponentFixture<LiliComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LiliComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LiliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
