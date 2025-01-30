import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AlbumsListResponse } from '../types/albums-list.response';

@Injectable({
  providedIn: 'root'
})
export class AlbumsListService {

  constructor(
    private readonly _http: HttpClient
  ) { }


  public getUserAlbums(userId: string): Observable<AlbumsListResponse> {
    return this._http.get<AlbumsListResponse>('https://jsonplaceholder.typicode.com/albums?userId=' + userId);
  }
}
