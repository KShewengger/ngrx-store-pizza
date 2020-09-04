import { createSelector } from '@ngrx/store';

import { ProductsState } from '@products/models';

import { getProductsState, } from '@products/store/reducers';
import * as ToppingsReducer from '@products/store/reducers/toppings.reducer';


export const getToppingsState = createSelector(
  getProductsState,
  (state: ProductsState) => state.toppings
);

export const getToppingEntities = createSelector(
  getToppingsState,
  ToppingsReducer.getToppingEntities
);

export const getAllToppings = createSelector(
  getToppingEntities,
  entities => Object.keys(entities).map(id => entities[parseInt(id, 10)])
);

export const getToppingsLoaded = createSelector(
  getToppingsState,
  ToppingsReducer.getToppingsLoaded
);

export const getToppingsLoading = createSelector(
  getToppingsState,
  ToppingsReducer.getToppingsLoading
);
