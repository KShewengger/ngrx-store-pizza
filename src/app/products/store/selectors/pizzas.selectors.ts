import { createSelector } from '@ngrx/store';

import * as IndexStore from '@index/store';
import * as ProductsReducer from '@products/store/reducers';
import * as PizzasReducer from '@products/store/reducers/pizzas.reducer';

import { Pizza } from '@products/models/pizza.model';


export const getPizzaState = createSelector(
  ProductsReducer.getProductsState,
  (state: ProductsReducer.ProductsState) => state.pizzas
);

export const getPizzasEntities = createSelector(
  getPizzaState,
  PizzasReducer.getPizzasEntities
);

export const getSelectedPizza = createSelector(
  getPizzasEntities,
  IndexStore.getRouterState,
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
