import { createFeatureSelector, createSelector, ActionReducerMap } from '@ngrx/store';
import * as fromProfiles from './profiles';
import * as _ from 'lodash';

export const selectProfilesState = createFeatureSelector<fromProfiles.State>('profiles');

export const selectProfiles = createSelector(selectProfilesState, fromProfiles.getProfiles);
export const selectError = createSelector(selectProfilesState, fromProfiles.getError);
export const selectSelectedId = createSelector(selectProfilesState, fromProfiles.getSelectedId);
export const selectProfile = createSelector(
    selectProfiles,
    selectSelectedId,
    (profiles, selectedId) => {
       console.log(_.find(profiles, ['userId', +selectedId]));
       if (selectedId) {
        return _.find(profiles, ['userId', +selectedId]);
       }
    }
);
