import { Profile } from '../model/profile';
import { ProfilesActions, ProfilesActionTypes } from '../actions/profiles';

export interface State {
  profiles: Profile[] | null;
  selectedId: string | null;
  loadError: string;
  addError: string;
}


export const initialState: State = {
    profiles: null,
    selectedId: null,
    loadError: null,
    addError: null
};

export function reducer(
  state = initialState,
  action: ProfilesActions): State {
  switch (action.type) {
    case ProfilesActionTypes.LoadComplete:
        return {
            ...state,
            loadError: null,
            profiles: action.payload
        };
    case ProfilesActionTypes.AddComplete:
        return {
            ...state,
            addError: null
        };
    case ProfilesActionTypes.Select:
        return {
            ...state,
            selectedId: action.payload
        };
    case ProfilesActionTypes.LoadError:
        return {
            ...state,
            loadError: action.payload
        };
    case ProfilesActionTypes.AddError:
        return {
            ...state,
            addError: action.payload
        };
    default: {
      return state;
    }
  }
}

export const getProfiles = (state: State) => state.profiles;
export const getLoadError = (state: State) => state.loadError;
export const getAddError = (state: State) => state.addError;
export const getSelectedId = (state: State) => state.selectedId;
