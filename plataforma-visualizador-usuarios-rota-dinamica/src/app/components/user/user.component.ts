import { Component, Input, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IUser } from 'src/app/interfaces/user.interface';
import { UserslistService } from 'src/app/services/users-list.service';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  @Input() public userId: string = '';
  public userList$: Observable<Array<IUser>> = of([]);

  constructor(private readonly _usersListService: UserslistService) { }

  ngOnInit() {
    this.userList$ = this._usersListService.getUsers();
  }

  public selectUser(userId: string): void {

  }

}
