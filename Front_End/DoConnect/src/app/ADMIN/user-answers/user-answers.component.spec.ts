import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserAnswersComponent } from './user-answers.component';

describe('UserAnswersComponent', () => {
  let component: UserAnswersComponent;
  let fixture: ComponentFixture<UserAnswersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserAnswersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserAnswersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
