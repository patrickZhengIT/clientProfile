import { Component, OnInit, HostBinding } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';

import { Profile } from '../model/profile';

@Component({
  templateUrl: './profilesDetail.component.html',
  styleUrls: ['./profilesDetail.component.scss'],
})
export class ProfilesDetailComponent implements OnInit {
  @HostBinding('style.display')   display = 'block';
  @HostBinding('style.position')  position = 'absolute';

  profile: Profile;
  editName: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.data
      .subscribe((data: { profile: Profile }) => {
        this.editName = data.profile.displayName;
        this.profile = data.profile;
      });
  }

  cancel() {
    this.gotoProfiles();
  }

  save() {
    this.profile.displayName = this.editName;
    this.gotoProfiles();
  }

  gotoProfiles() {
    const profileId = this.profile ? this.profile.userId : null;
    // Pass along the profile id if available
    // so that the profileListComponent can select that profile.
    // Relative navigation back to the crises
    this.router.navigate(['../', { id: profileId }], { relativeTo: this.route });
  }
}


