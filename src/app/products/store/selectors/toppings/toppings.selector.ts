import { createSelector } from '@ngrx/store';

import { ProductsState } from '@products/models';

import { getProductsState, } from '@products/store/reducers';
import { getSelectedPizza } from '@products/store/selectors/pizzas/pizzas.selector';
import * as ToppingsReducer from '@products/store/reducers/toppings/toppings.reducer';


export const getToppingsState = createSelector(
  getProductsState,
  (state: ProductsState) => state.toppings
);

export const getToppingEntities = createSelector(
  getToppingsState,
  ToppingsReducer.getToppingEntities
);

export const getSelectedToppings = createSelector(
  getToppingsState,
  ToppingsReducer.getSelectedToppings
);

export const getAllToppings = createSelector(
  getToppingEntities,
  entities => Object.keys(entities).map(id => entities[parseInt(id, 10)])
);

export const getPizzaVisualised = createSelector(
  getSelectedPizza,
  getToppingEntities,
  getSelectedToppings,
  (pizza, toppingEntities, selectedToppings) => {
    const toppings = selectedToppings.map(id => toppingEntities[id]);
    return { ...pizza, toppings };
  }
);

export const getToppingsLoaded = createSelector(
  getToppingsState,
  ToppingsReducer.getToppingsLoaded
);

export const getToppingsLoading = createSelector(
  getToppingsState,
  ToppingsReducer.getToppingsLoading
);
