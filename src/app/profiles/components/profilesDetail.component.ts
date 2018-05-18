import { Component, OnInit, HostBinding } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';

import { Profile } from '../model/profile';

@Component({
  templateUrl: './profilesDetail.component.html',
  styleUrls: ['./profilesDetail.component.scss']
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

   goBack() {
    const profileId = this.profile ? this.profile.userId : null;
    this.router.navigate(['../', { id: profileId }], { relativeTo: this.route });
  }
}


