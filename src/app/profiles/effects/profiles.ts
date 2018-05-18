import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';

import { ProfilesService } from '../services/profiles.service';
import {
  ProfilesActionTypes,
  ProfilesActions,
  LoadComplete,
  LoadError,
  Load,
  AddComplete,
  AddError,
  Add
} from '../actions/profiles';
import { Profile } from '../model/profile';
import {
  map,
  switchMap,
  catchError
} from 'rxjs/operators';


@Injectable()
export class ProfilesEffects {
  @Effect()
  load$: Observable<Action> = this.actions$.pipe(
    ofType<Load>(ProfilesActionTypes.Load),
    switchMap( () => {
        return this.service.getProfiles().pipe(
         map((profiles: Profile[]) => new LoadComplete(profiles)),
         catchError(err => of(new LoadError(err)))
        );
    })
  );

  @Effect()
  add$: Observable<Action> = this.actions$.pipe(
    ofType<Add>(ProfilesActionTypes.Add),
    switchMap( (action: Add) => {
        return this.service.addProfile(action.payload).pipe(
         map((profile: Profile) => new AddComplete(profile)),
         catchError(err => of(new AddError(err)))
        );
    })
  );

  constructor(
    private actions$: Actions,
    private service: ProfilesService,
  ) {}
}
