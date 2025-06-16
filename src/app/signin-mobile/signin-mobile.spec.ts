import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SigninMobile } from './signin-mobile';

describe('SigninMobile', () => {
  let component: SigninMobile;
  let fixture: ComponentFixture<SigninMobile>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SigninMobile]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SigninMobile);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
