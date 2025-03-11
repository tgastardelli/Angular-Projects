import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UpdateUserService } from '../services/update-user.service';
import { CreateUserService } from '../services/create-user.service';

@Component({
  selector: 'app-user-infos',
  templateUrl: './user-infos.component.html',
  styleUrls: ['./user-infos.component.scss']
})
export class UserInfosComponent {
  userInfosForm = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    username: new FormControl(''),
    password: new FormControl(''),
  });

  constructor (
    private readonly _updateUserService: UpdateUserService,
    private readonly _createUserService: CreateUserService
  ) {}

  public updateUser() {
    const body = this.userInfosForm.value as any

    console.log(body);

    this._updateUserService.updateUser(body).subscribe({
      next: () => {
        console.log('Dados atualizados')
        this.userInfosForm.setErrors({ 'update-success': true })
      },
      error: () => {
        this.userInfosForm.setErrors({ 'update-error': true })
      }
    })
  }

  public createUser() {
    const body = this.userInfosForm.value as any

    this._createUserService.createUser(body).subscribe({
      next: () => {
        this.userInfosForm.setErrors({ 'create-user-success': true })
      },
      error: (error: HttpErrorResponse) => {
        const ALREADY_EXISTED_USER = error.status === 409;

        if (ALREADY_EXISTED_USER) {
          return this.userInfosForm.setErrors({ 'existing-user-error': true })
        }

        this.userInfosForm.setErrors({ 'create-user-error': true })
        // return
      }
    })
  }
}
