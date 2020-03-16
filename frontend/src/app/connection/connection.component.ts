import { LoginInfo } from './../models/login-info';
import { AuthenticationService } from './../services/authentication.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-connection',
  templateUrl: './connection.component.html',
  styleUrls: ['./connection.component.sass']
})
export class ConnectionComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private _formBuilder: FormBuilder, private _auth: AuthenticationService) {
  }


  ngOnInit(): void {
    this.loginForm = this._formBuilder.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
  }

  login() {
    // this.submitted = true;
    if (this.loginForm.invalid) {
      console.log('invalid form');
      return;
    }
    console.log(this.loginForm.value);
    const loginInfo: LoginInfo = new LoginInfo();
    loginInfo.email = this.loginForm.value.email;
    loginInfo.password = this.loginForm.value.password;
    this._auth.authenticate(loginInfo).subscribe(data => {
      console.log(data);
    })
    // this.loginInfo = new LoginInfo(this.loginForm.value.email, this.loginForm.value.password);
    // this.authService.attemptAuthentication(this.loginInfo).subscribe(
    //   data => {
    //     this.tokenStorage.saveToken(data.token);
    //     this.tokenStorage.saveUsername(data.username);
    //     this.tokenStorage.saveAuthorities(data.authorities);
    //     this.isLoginFailed = false;
    //     this.isLoggedIn = true;
    //     this.roles = this.tokenStorage.getAuthorities();
    //     this.isAdmin = this.tokenStorage.isAdmin();

    //     let authority: string = null;
    //     data.authorities.every(role => {
    //       if(role === 'ROLE_ADMIN') {
    //         authority = 'admin';
    //         return false;
    //       }
    //       authority = 'user';
    //       return true;
    //     });
    //     this.headerService.toggleNavBar(authority);
    //   },
    //   error => {
    //     console.log(error);
    //     this.errorMessage = error.error.message;
    //     this.isLoginFailed = true;
    //   }
    // );
  }
}