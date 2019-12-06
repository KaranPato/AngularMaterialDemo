import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MainService } from 'src/app/common/services/main.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  registerForm: FormGroup;
  submitted = false;
  submittedR = false;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private mainService: MainService
  ) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
    this.registerForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phoneNo: ['', [Validators.required, Validators.minLength(9), Validators.maxLength(13)]],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required]
    }, { validator: this.checkPasswords });
  }

  get l() { return this.loginForm.controls; }
  get r() { return this.registerForm.controls; }

  checkPasswords(group: FormGroup) {
    let pass = group.controls['password'].value;
    let confirmPass = group.controls['confirmPassword'].value;

    return pass === confirmPass ? null : { notSame: true }
  }

  login() {
    this.submitted = true;

    if (this.loginForm.invalid) {
      return;
    }

    const data = {
      username: this.l.username.value,
      password: this.l.password.value
    }

    this.mainService.Login(data).subscribe((data: any) => {
      if (data.isSuccess) {
        this.router.navigate(['/layout']);
      }
    });
  }

  register() {
    this.submittedR = true;

    if (this.registerForm.invalid) {
      return;
    }

    const data = {
      firstName: this.r.firstName.value,
      lastName: this.r.lastName.value,
      email: this.r.email.value,
      phoneNo: this.r.phoneNo.value,
      password: this.r.password.value,
      confirmPassword: this.r.confirmPassword.value
    }

    this.mainService.Register(data).subscribe((data: any) => {
      if (data.isSuccess) {
        this.router.navigate(['/login']);
      }
    });
  }

  keypressDigit(event: any) {
    if ((event.keyCode >= 48 && event.keyCode <= 57) || (event.keyCode == 46) || (event.keyCode == 43)) {
      return true;
    }
    else {
      event.preventDefault();
    }
  }

}
