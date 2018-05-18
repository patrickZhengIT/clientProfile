import { Injectable, InjectionToken, Optional, Inject } from '@angular/core';
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
  skip,
  takeUntil,
  catchError,
  mapTo,
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

  constructor(
    private actions$: Actions,
    private service: ProfilesService,
  ) {}
}
