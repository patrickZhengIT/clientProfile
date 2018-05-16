import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProfilesService } from '../services/profiles.service';
import { Profile } from '../model/profile';
import { MatDialog, MatDialogConfig} from '@angular/material';
import { ConfirmDialogComponent } from './confirmDialog.component';
import { Router } from '@angular/router';
@Component({
  templateUrl: './profilesAdd.component.html',
  styleUrls: ['./profilesAdd.component.scss'],
})
export class ProfilesAddComponent implements OnInit {
  userForm: FormGroup;
// TODO: refactor so that html could use ngfor
  readonly attributes =
    {
      email: [null],
      firstName: [null],
      lastName: [null],
      displayName: [null],
      preference: [null],
      department: [null],
      team: [null]
    };


  constructor(
    private formBuilder: FormBuilder,
    private service: ProfilesService,
    private dialog: MatDialog,
    private router: Router
  ) { }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.userForm = this.formBuilder.group(this.attributes);
  }

  onSubmit() {
    const profileInfo = this.prepareProfile();
    this.service.addProfile(profileInfo).subscribe( () => {
      this.openConfirmDialog();
      this.router.navigate(['/profiles', { id: 0 }]);
    });
  }

  prepareProfile() {
    const profileInfo = this.userForm.value;

    const info: Profile = {
      userId: 0,
      email: profileInfo.email,
      firstName: profileInfo.firstName,
      lastName: profileInfo.lastName,
      displayName: profileInfo.displayName,
      description: profileInfo.preference,
      department: profileInfo.department,
      team: profileInfo.team
    };
    return info;
  }

  openConfirmDialog() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.autoFocus = true;

    this.dialog.open(ConfirmDialogComponent, dialogConfig);
  }

}

