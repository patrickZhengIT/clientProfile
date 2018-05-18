import { Action } from '@ngrx/store';
import { Profile } from '../model/profile';

export enum ProfilesActionTypes {
  Load = '[Profiles] Load',
  LoadComplete = '[Profiles] Load Complete',
  LoadError = '[Profiles] Load Error',
  Add = '[Profiles] Add',
  AddComplete = '[Profiles] Add Complete',
  AddError = '[Profiles] Add Error',
  Select = '[Profile] Select'
}

export class Load implements Action {
  readonly type = ProfilesActionTypes.Load;

  constructor() {}
}

export class LoadComplete implements Action {
  readonly type = ProfilesActionTypes.LoadComplete;

  constructor(public payload: Profile[]) {}
}

export class LoadError implements Action {
  readonly type = ProfilesActionTypes.LoadError;

  constructor(public payload: string) {}
}

export class Add implements Action {
  readonly type = ProfilesActionTypes.Load;

  constructor(public payload: Profile) {}
}

export class AddComplete implements Action {
    readonly type = ProfilesActionTypes.AddComplete;

    constructor(public payload: Profile[]) {}
  }

  export class AddError implements Action {
    readonly type = ProfilesActionTypes.AddError;

    constructor(public payload: string) {}
  }

  export class Select implements Action {
    readonly type = ProfilesActionTypes.Select;

    constructor(public payload: string) {}
  }



export type ProfilesActions = Load
 | LoadComplete
 | LoadError
 | Add
 | AddComplete
 | AddError
 | Select;
