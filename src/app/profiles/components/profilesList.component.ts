import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Store } from '@ngrx/store';

import { Profile } from '../model/profile';
import * as ProfilesSelectors from '../reducers';
import * as ProfilesActions from '../actions/profiles';
import { State } from '../reducers/profiles';
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
    private store: Store<State>
  ) {}

  ngOnInit() {
    this.profiles$ = this.store.select(ProfilesSelectors.selectProfiles);

    this.route.paramMap.subscribe( (params: ParamMap) => {
        this.selectedId = +params.get('id');
        this.store.dispatch(new ProfilesActions.Load());
    });
  }
}
