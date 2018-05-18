import { createSelector } from '@ngrx/store';
import { Profile } from '../model/profile';
import { ProfilesActions, ProfilesActionTypes } from '../actions/profiles';

export interface State {
  profiles: Profile[] | null;
  selectedId: string | null;
  error: string;
}


export const initialState: State = {
    profiles: null,
    selectedId: null,
    error: null
};

export function reducer(
  state = initialState,
  action: ProfilesActions): State {
  switch (action.type) {
    case ProfilesActionTypes.LoadComplete:
        return {
            ...state,
            profiles: action.payload
        };
    case ProfilesActionTypes.Select:
        return {
            ...state,
            selectedId: action.payload
        };

    default: {
      return state;
    }
  }
}

export const getProfiles = (state: State) => state.profiles;
export const getError = (state: State) => state.error;
export const getSelectedId = (state: State) => state.selectedId;
