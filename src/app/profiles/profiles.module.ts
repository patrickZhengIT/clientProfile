import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material';
import { MatDialogModule } from '@angular/material';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { ProfilesComponent } from './container/profiles.component';
import { ProfilesListComponent } from './components/profilesList.component';
import { ProfilesDetailComponent } from './components/profilesDetail.component';
import { ProfilesAddComponent } from './components/profilesAdd.component';
import { ConfirmDialogComponent } from './components/confirmDialog.component';

import { ProfilesService } from './services/profiles.service';

import { ProfilesRoutingModule } from './profiles.routing';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule,
    NoopAnimationsModule,
    MaterialModule,
    ProfilesRoutingModule
  ],
  declarations: [
    ProfilesComponent,
    ProfilesListComponent,
    ProfilesDetailComponent,
    ProfilesAddComponent,
    ConfirmDialogComponent
  ],
  providers: [
    ProfilesService
  ],
  entryComponents: [ConfirmDialogComponent]
})

export class ProfilesModule {}

