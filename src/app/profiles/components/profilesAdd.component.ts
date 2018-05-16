import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  templateUrl: './profilesAdd.component.html',
  styleUrls: ['./profilesAdd.component.scss'],
})
export class ProfilesAddComponent implements OnInit { 
  userForm: FormGroup;
 
  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.userForm = this.formBuilder.group({
      userId: [null],
      firstName: [null, Validators.required],
      lastName: [null, Validators.required],
      displayName: null
    });
  }
  onSubmit(){

  }

  clear(){

  }
}