import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm: FormGroup = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });

  constructor(private readonly _router: Router, private readonly _loginService: LoginService) { }


  public onLogin() {
    const username = this.loginForm.value.username;
    const password = this.loginForm.value.password;

    this._loginService.login(username, password)
    .subscribe({
      next: (tokenResponse) => {
        console.log('TOKEN: ', tokenResponse);

        this._router.navigate(['/user-infos']);
      },
      error: (error: HttpErrorResponse ) => {
        const UNAUTHORIZED_ERROR_CODE = 401;

        if(error.status === UNAUTHORIZED_ERROR_CODE) {
          this.loginForm.setErrors({'invalidCredentials' : true});
        } else {
          this.loginForm.setErrors({ 'generalCredentialsError' : true });
        }
      },
    })
  }
}
