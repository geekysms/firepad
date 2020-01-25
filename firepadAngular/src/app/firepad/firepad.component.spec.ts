import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirepadComponent } from './firepad.component';

describe('FirepadComponent', () => {
  let component: FirepadComponent;
  let fixture: ComponentFixture<FirepadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirepadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirepadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
