import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProfilesComponent } from './container/profiles.component';
import { ProfilesListComponent } from './components/profilesList.component';
import { ProfilesDetailComponent } from './components/profilesDetail.component';
import { ProfilesAddComponent } from './components/profilesAdd.component';

import { ProfileDetailResolver } from './services/profilesDetail.resolver.service';

const profilesRoutes: Routes = [
  {
    path: 'profiles',
    component: ProfilesComponent,
    children: [
      {
        path: '',
        component: ProfilesListComponent,
        children: [
          {
            path: ':id',
            component: ProfilesDetailComponent,
            resolve: {
              profile: ProfileDetailResolver
            }
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
  ],
  providers: [
    ProfileDetailResolver
  ]
})

export class ProfilesRoutingModule { }

