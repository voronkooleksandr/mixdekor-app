import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {

  loginForm!: FormGroup;
  isSubmitted = false;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    })
  }

  get formControl() {
    return this.loginForm.controls;
  }

  submitLogin() {
    this.isSubmitted = true;
    if (this.loginForm.invalid) return;

    alert(`email: ${ this.formControl.email.value },
    password: ${this.formControl.password.value}`)
  }
}
