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
    private router: Router,
  ) {}

  ngOnInit() {
    this.route.data
      .subscribe((data: { profile: Profile }) => {
        this.editName = data.profile.displayName;
        this.profile = data.profile;
      });
  }

  cancel() {
    this.gotoCrises();
  }

  save() {
    this.profile.displayName = this.editName;
    this.gotoCrises();
  }

  canDeactivate(): Observable<boolean> | boolean {
    // Allow synchronous navigation (`true`) if no profile or the profile is unchanged
    if (!this.profile || this.profile.displayName === this.editName) {
      return true;
    }
    // Otherwise ask the user with the dialog service and return its
    // observable which resolves to true or false when the user decides
  }

  gotoCrises() {
    let profileId = this.profile ? this.profile.userId : null;
    // Pass along the profile id if available
    // so that the profileListComponent can select that profile.
    // Add a totally useless `foo` parameter for kicks.
    // Relative navigation back to the crises
    this.router.navigate(['../', { id: profileId, foo: 'foo' }], { relativeTo: this.route });
  }
}


