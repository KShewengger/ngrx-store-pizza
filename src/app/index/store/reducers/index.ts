import { Params } from '@angular/router';
import { createFeatureSelector, ActionReducerMap } from '@ngrx/store';

import * as RouterStore from '@ngrx/router-store';


export interface RouterStateUrl {
  url: string;
  queryParams: Params;
  params: Params;
}

export interface State {
  routerReducer: RouterStore.RouterReducerState<RouterStateUrl>;
}

export const reducers: ActionReducerMap<State> = {
  routerReducer: RouterStore.routerReducer,
};

export const getRouterState = createFeatureSelector<RouterStore.RouterReducerState<RouterStateUrl>>('routerReducer');
