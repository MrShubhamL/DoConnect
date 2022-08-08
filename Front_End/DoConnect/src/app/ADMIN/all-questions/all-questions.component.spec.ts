import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllQuestionsComponent } from './all-questions.component';

describe('AllQuestionsComponent', () => {
  let component: AllQuestionsComponent;
  let fixture: ComponentFixture<AllQuestionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllQuestionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllQuestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
