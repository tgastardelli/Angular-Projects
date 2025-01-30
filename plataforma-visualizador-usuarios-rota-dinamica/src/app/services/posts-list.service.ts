import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PostsListResponse } from '../types/posts-list-response';
import { IPost } from '../interfaces/post.interface';

@Injectable({
  providedIn: 'root'
})
export class PostsListService {

  constructor(private readonly _http: HttpClient) { }

  public getUserPosts(userId: string): Observable<PostsListResponse>{
    return this._http.get<PostsListResponse>('https://jsonplaceholder.typicode.com/posts?userId=' + userId);
  }

  public getPost(postId: string): Observable<IPost> {
    return this._http.get<IPost>('https://jsonplaceholder.typicode.com/posts/' + postId);
  }
}
