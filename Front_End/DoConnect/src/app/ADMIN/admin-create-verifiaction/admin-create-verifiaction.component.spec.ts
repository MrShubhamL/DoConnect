import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCreateVerifiactionComponent } from './admin-create-verifiaction.component';

describe('AdminCreateVerifiactionComponent', () => {
  let component: AdminCreateVerifiactionComponent;
  let fixture: ComponentFixture<AdminCreateVerifiactionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminCreateVerifiactionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminCreateVerifiactionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
