import { ActionReducerMap } from '@ngrx/store';

export interface State {
  auth: fromAuth.State;
  layout: fromLayout.State;
}

export const reducers: ActionReducerMap<State> = {
  auth: fromAuth.reducer,
  layout: fromLayout.reducer,
};