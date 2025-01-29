import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-emp-add-edit',
  templateUrl: './emp-add-edit.component.html',
  styleUrls: ['./emp-add-edit.component.css']
})
export class EmpAddEditComponent implements OnInit {
  public education: Array<string> = [
    'Matric',
    'Diploma',
    'Intermediate',
    'Graduate',
    'Post Graduate'
  ];
  public form: FormGroup;

  constructor(
    private _fb: FormBuilder
  ) { 
    this.form = this._fb.group({
      firstName: ['', Validators.required],
      lastName: [''],
      email: [''],
      dob: [''],
      gender: '',
      education: '',
      company: '',
      experience: '',
      package: ''
    })
  }

  ngOnInit() {
  }

  public onSubmit(): void {
    if (this.form.valid) {
      console.log(this.form.value);
    }

  }

}
