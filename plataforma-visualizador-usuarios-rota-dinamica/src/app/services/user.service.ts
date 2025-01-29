import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IUser } from '../interfaces/user.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private readonly _http: HttpClient) { }

  public getUsers(): Observable<Array<IUser>> {
    return this._http.get<Array<IUser>>('https://jsonplaceholder.typicode.com/users');
  }
}
