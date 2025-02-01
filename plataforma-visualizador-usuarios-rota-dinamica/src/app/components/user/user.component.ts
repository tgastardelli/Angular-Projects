import { Component, Input, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IUser } from 'src/app/interfaces/user.interface';
import { UserslistService } from 'src/app/services/users-list.service';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit{
  public user$: Observable<IUser> = of({} as IUser)

  @Input() set userId (userId: string) {
    console.log(userId);

    this.user$ = this._userService.getUser(userId);
  }

  constructor(private readonly _userService: UserslistService) { }

  ngOnInit() {
  }


}
