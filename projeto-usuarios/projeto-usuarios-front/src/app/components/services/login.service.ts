import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private readonly _httpClient: HttpClient
  ) { }


  public login(username: string, password: string): Observable<{ token: string }> {
    return this._httpClient.post<{ token: string }>('http://localhost:3000/login', {
      username: username,
      password: password
    }).pipe(
      map((tokenResponse) => {
        localStorage.setItem('token', tokenResponse.token);

        return tokenResponse;
      })
    );
  }
}
