import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthServiceService } from '../auth-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm;
  constructor(private fb: FormBuilder,
    private myRoute: Router,
    private auth: AuthServiceService) {
    this.loginForm = fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });

  }

  ngOnInit() {
  }

  login() {
    if (this.loginForm.valid) {
      this.auth.sendToken(this.loginForm.value.email)
      this.myRoute.navigate([""]);
    }

  }

}
