import { createFeatureSelector, createSelector, ActionReducerMap } from '@ngrx/store';
import * as fromProfiles from './profiles';

export const selectProfilesState = createFeatureSelector<fromProfiles.State>('profiles');

export const selectProfiles = createSelector(selectProfilesState, fromProfiles.getProfiles);
