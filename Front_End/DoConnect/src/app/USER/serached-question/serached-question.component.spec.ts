import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SerachedQuestionComponent } from './serached-question.component';

describe('SerachedQuestionComponent', () => {
  let component: SerachedQuestionComponent;
  let fixture: ComponentFixture<SerachedQuestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SerachedQuestionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SerachedQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
