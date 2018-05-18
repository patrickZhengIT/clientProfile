import { Injectable } from '@angular/core';
import { Router, Resolve, RouterStateSnapshot,
         ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';

import { Profile } from '../model/profile';
import { Store } from '@ngrx/store';

import * as ProfilesSelectors from '../reducers';
import * as ProfilesActions from '../actions/profiles';
import { State } from '../reducers/profiles';

@Injectable()
export class ProfileDetailResolver implements Resolve<Profile> {
  constructor(private store: Store<State>, private router: Router) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Profile> {
    const id = route.paramMap.get('id');

    this.store.dispatch(new ProfilesActions.Select(id));
    return this.store.select(ProfilesSelectors.selectProfile)
    .pipe(
      take(1),
      map( (profile: Profile) => {
        if (profile) {
          return profile;
        } else { // id not found
          this.router.navigate(['/profiles']);
          return null;
        }
      })
    );
  }
}

