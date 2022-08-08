import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllAnswersComponent } from './all-answers.component';

describe('AllAnswersComponent', () => {
  let component: AllAnswersComponent;
  let fixture: ComponentFixture<AllAnswersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllAnswersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllAnswersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
