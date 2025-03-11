import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CreateUserService {

  constructor(private readonly _httpClient: HttpClient) { }


  public createUser(newUser: {name: string; email: string; username: string; password: string}) {
    const headers = new HttpHeaders().set('authorization', 'Bearer ' + localStorage.getItem('token'));

    return this._httpClient.post<{ message: string; }>(
      'http://localhost:3000/create-user', 
      newUser,
      { headers })
  }
}
