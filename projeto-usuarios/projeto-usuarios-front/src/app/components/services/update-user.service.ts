import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UpdateUserService {

  constructor(private readonly _httpClient: HttpClient) { }

  public updateUser(userInfos: {name: string; email: string; username: string; password: string}) {
    const headers = new HttpHeaders().set('authorization', 'Bearer ' + localStorage.getItem('token')!);
    
    return this._httpClient.put<{message: string; token: string}>('http://localhost:3000/update-user', userInfos, {
      headers
    }).pipe(
      map((updateUserResponse) => {
        localStorage.setItem('token', updateUserResponse.token)
        
        return updateUserResponse
      })
    );
  }
}
