import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

import { Profile } from '../model/profile';
import { ProfilesService } from '../services/profiles.service';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Component({
  templateUrl: './profilesList.component.html',
  styleUrls: ['./profilesList.component.scss'],
})
export class ProfilesListComponent implements OnInit {
  profiles$: Observable<Profile[]>;
  selectedId: number;

  constructor(
    private route: ActivatedRoute,
    private service: ProfilesService
  ) {}

  ngOnInit() {
    this.profiles$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) => {
        this.selectedId = +params.get('id');
        return this.service.getProfiles();
      })
    );
  }
}
