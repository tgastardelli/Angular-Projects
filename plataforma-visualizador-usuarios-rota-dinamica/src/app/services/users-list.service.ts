import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UsersListResponse } from '../types/users-list.response';
import { IUser } from '../interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class UserslistService {

  constructor(private readonly _http: HttpClient) { }

  public getUsers(): Observable<UsersListResponse> {
    return this._http.get<UsersListResponse>('https://jsonplaceholder.typicode.com/users');
  }

  public getUser(userId: string): Observable<IUser> {
    return this._http.get<IUser>('https://jsonplaceholder.typicode.com/users/' + userId);
  }
}
