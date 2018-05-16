import { NgModule } from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ProfilesComponent } from './container/profiles.component';
import { ProfilesListComponent } from './components/profilesList.component';
import { ProfilesDetailComponent } from './components/profilesDetail.component';
import { ProfilesAddComponent } from './components/profilesAdd.component';

import { ProfilesService } from './services/profiles.service';

import { ProfilesRoutingModule } from './profiles.routing';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ProfilesRoutingModule
  ],
  declarations: [
    ProfilesComponent,
    ProfilesListComponent,
    ProfilesDetailComponent,
    ProfilesAddComponent      
  ],
  providers: [
    ProfilesService
  ]
})

export class ProfilesModule {}

