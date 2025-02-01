import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, of } from 'rxjs';
import { TodosListService } from 'src/app/services/todos-list.service';
import { TodosListResponse } from 'src/app/types/todos-list.response';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {

  public todosList$: Observable<TodosListResponse> = of([]);

  constructor(
    private _activetedRoute: ActivatedRoute,
    private _todosListService: TodosListService
  ) { }

  ngOnInit(): void {
    this._activetedRoute.parent?.params.subscribe((params) => {
      console.log(params);
      
      this.todosList$ = this._todosListService.getUserTodos(params['userId']);
    })
  }

}
