import { Component, Input, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IUser } from 'src/app/interfaces/user.interface';


@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {

  public userList$: Observable<Array<IUser>> = of([]);
  
  constructor(

  ) { }

  ngOnInit() {
  }

}
