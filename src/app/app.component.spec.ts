import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, RouterTestingModule],
    
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it('should have title "day6part3"', () => {
    expect(component.title).toBe('day6part3');
  });

  it('should create a form with userName and password controls', () => {
    expect(component.loginForm.contains('userName')).toBeTruthy();
    expect(component.loginForm.contains('password')).toBeTruthy();
  });

  it('should make the userName control required', () => {
    const control = component.loginForm.get('userName');
    control?.setValue('');
    expect(control?.valid).toBeFalsy();
  });

  it('should make the userName control have a minimum length of 4', () => {
    const control = component.loginForm.get('userName');
    control?.setValue('abc');
    expect(control?.valid).toBeFalsy();
  });

  it('should make the password control required', () => {
    const control = component.loginForm.get('password');
    control?.setValue('');
    expect(control?.valid).toBeFalsy();
  });
});
