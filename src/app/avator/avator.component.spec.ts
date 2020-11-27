import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvatorComponent } from './avator.component';

describe('AvatorComponent', () => {
  let component: AvatorComponent;
  let fixture: ComponentFixture<AvatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AvatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AvatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
