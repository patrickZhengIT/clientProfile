import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProfilesComponent } from './container/profiles.component';
import { ProfilesListComponent } from './components/profilesList.component';
import { ProfilesDetailComponent } from './components/profilesDetail.component';
import { ProfilesAddComponent } from './components/profilesAdd.component';

const profilesRoutes: Routes = [
  {
    path: '',
    component: ProfilesComponent,
    children: [
      {
        path: '',
        component: ProfilesListComponent,
        children: [
          {
            path: ':id',
            component: ProfilesDetailComponent,
          },
          {
            path: '',
            component: ProfilesAddComponent
          }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(profilesRoutes)
  ],
  exports: [
    RouterModule
  ]
})

export class ProfilesRoutingModule { }

