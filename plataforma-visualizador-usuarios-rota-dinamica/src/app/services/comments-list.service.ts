import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICommentsResponse } from '../types/comments-list-response';

@Injectable({
  providedIn: 'root'
})
export class CommentsListService {

constructor(private readonly _http: HttpClient) { }

  public getPostComments(postId: string): Observable<ICommentsResponse> {
    return this._http.get<ICommentsResponse>('https://jsonplaceholder.typicode.com/comments?postId=' + postId);
  }
}




