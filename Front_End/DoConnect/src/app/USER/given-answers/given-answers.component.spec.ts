import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GivenAnswersComponent } from './given-answers.component';

describe('GivenAnswersComponent', () => {
  let component: GivenAnswersComponent;
  let fixture: ComponentFixture<GivenAnswersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GivenAnswersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GivenAnswersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
