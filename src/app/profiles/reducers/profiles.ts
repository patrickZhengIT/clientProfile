import { createSelector } from '@ngrx/store';
import { Profile } from '../model/profile';
import { ProfilesActions, ProfilesActionTypes } from '../actions/profiles';

export interface State {
  profiles: Profile[] | null;
}


export const initialState: State = {
    profiles: null
};

export function reducer(
  state = initialState,
  action: ProfilesActions): State {
  switch (action.type) {
    case ProfilesActionTypes.LoadComplete:
        return {
            profiles: action.payload
        };
    default: {
      return state;
    }
  }
}

export const getProfiles = (state: State) => state.profiles;
