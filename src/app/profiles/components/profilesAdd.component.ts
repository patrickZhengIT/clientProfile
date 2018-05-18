import { Component, OnInit, OnDestroy, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Profile } from '../model/profile';
import { MatDialog, MatDialogConfig} from '@angular/material';
import { ConfirmDialogComponent } from './confirmDialog.component';
import { Router } from '@angular/router';

import { Store } from '@ngrx/store';
import { ActionsSubject } from '@ngrx/store';

import * as ProfilesSelectors from '../reducers';
import * as ProfilesActions from '../actions/profiles';
import { State } from '../reducers/profiles';
import { Observable } from 'rxjs';
import { Subscription } from 'rxjs';

@Component({
  templateUrl: './profilesAdd.component.html',
  styleUrls: ['./profilesAdd.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProfilesAddComponent implements OnInit, OnDestroy {
  userForm: FormGroup;
  activeSub: Subscription;
  error$: Observable<string>;
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
    private dialog: MatDialog,
    private router: Router,
    private store: Store<State>,
    private actionsSubject: ActionsSubject
  ) {
    this.error$ = this.store.select(ProfilesSelectors.selectAddError);
    this.activeSub = this.actionsSubject.subscribe(data => {
      if (data.type === '[Profiles] Add Complete') {
        this.openConfirmDialog();
        this.store.dispatch(new ProfilesActions.Load());
      }
   });
   }

  ngOnInit() {
    this.createForm();
  }

  ngOnDestroy() {
    this.activeSub.unsubscribe();
  }

  createForm() {
    this.userForm = this.formBuilder.group(this.attributes);
  }

  onSubmit() {
    const profileInfo = this.prepareProfile();
    this.store.dispatch(new ProfilesActions.Add(profileInfo));
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

