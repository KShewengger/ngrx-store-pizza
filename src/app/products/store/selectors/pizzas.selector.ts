import { createSelector } from '@ngrx/store';

import { getRouterState } from '@index/store';
import { getProductsState } from '@products/store/reducers';
import * as PizzasReducer from '@products/store/reducers/pizzas/pizzas.reducer';

import { Pizza, ProductsState } from '@products/models';


export const getPizzaState = createSelector(
  getProductsState,
  (state: ProductsState) => state.pizzas
);

export const getPizzasEntities = createSelector(
  getPizzaState,
  PizzasReducer.getPizzasEntities
);

export const getSelectedPizza = createSelector(
  getPizzasEntities,
  getRouterState,
  (entities, router): Pizza => router.state && entities[router.state.params.pizzaId]
);

export const getAllPizzas = createSelector(
  getPizzasEntities,
  entities => Object.keys(entities).map(id => entities[parseInt(id, 10)]));

export const getPizzasLoaded = createSelector(
  getPizzaState,
  PizzasReducer.getPizzasLoaded
);

export const getPizzasLoading = createSelector(
  getPizzaState,
  PizzasReducer.getPizzasLoading
);
