import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TodosListResponse } from '../types/todos-list.response';

@Injectable({
  providedIn: 'root'
})
export class TodosListService {

  constructor(
    private readonly _http: HttpClient
  ) { }

  public getUserTodos(userId: string): Observable<TodosListResponse> {
    return this._http.get<TodosListResponse>('https://jsonplaceholder.typicode.com/todos?userId=' + userId);
  }
}
