import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupUComponent } from './signup-u.component';

describe('SignupUComponent', () => {
  let component: SignupUComponent;
  let fixture: ComponentFixture<SignupUComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignupUComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupUComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
