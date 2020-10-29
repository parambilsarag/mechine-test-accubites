import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm;
  constructor() { }

  ngOnInit() {
    this.initLoginForm();
  }
  initLoginForm() {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
    });
  }
  login() {
    if (!this.validateForm(this.loginForm)) {
      return;
    }
    console.log("Login form value", this.loginForm.value);
    alert('** Login Successfull**');
  }

  validateForm(form) {
    Object.keys(form.controls).forEach(key => {
      const ctrl = form.get(key);
      ctrl.markAsTouched({ onlySelf: true });
    });
    return !form.invalid;
  }

}
