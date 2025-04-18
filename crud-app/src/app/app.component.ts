import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EmpAddEditComponent } from './components/emp-add-edit/emp-add-edit.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private _dialog: MatDialog) {
  }

  public openDialog() {
    this._dialog.open(EmpAddEditComponent);
  }
}
