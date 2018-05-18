import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Store } from '@ngrx/store';

import { Profile } from '../model/profile';
import * as ProfilesSelectors from '../reducers';
import * as ProfilesActions from '../actions/profiles';
import { State } from '../reducers/profiles';
import { Observable } from 'rxjs';

@Component({
  templateUrl: './profilesList.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./profilesList.component.scss']
})
export class ProfilesListComponent implements OnInit {
  profiles$: Observable<Profile[]>;
  error$: Observable<string>;

  constructor(
    private route: ActivatedRoute,
    private store: Store<State>
  ) {
    this.profiles$ = this.store.select(ProfilesSelectors.selectProfiles);
    this.error$ = this.store.select(ProfilesSelectors.selectLoadError);
  }

  ngOnInit() {
    this.route.paramMap.subscribe( (params: ParamMap) => {
        this.store.dispatch(new ProfilesActions.Load());
    });
  }
}
