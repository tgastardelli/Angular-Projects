import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { UserslistService } from 'src/app/services/users-list.service';
import { UsersListResponse } from 'src/app/types/users-list.response';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {

  public usersList$: Observable<UsersListResponse> = of([]);

  constructor(private readonly _usersListService: UserslistService) { }

  ngOnInit() {
    this.usersList$ = this._usersListService.getUsers();
  }
}
