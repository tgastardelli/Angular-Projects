import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IUser } from 'src/app/interfaces/user.interface';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  public userList$: Observable<Array<IUser>> = of([]);

  constructor(private readonly _userService: UserService) { }

  ngOnInit() {
    this.userList$ = this._userService.getUsers();
  }

}
