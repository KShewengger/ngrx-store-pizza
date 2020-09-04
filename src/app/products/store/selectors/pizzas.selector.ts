import { createSelector } from '@ngrx/store';

import { getRouterState } from '@index/store';
import * as ProductsReducer from '@products/store/reducers';
import * as PizzasReducer from '@products/store/reducers/pizzas.reducer';
import * as ToppingsReducer from '@products/store/reducers/toppings.reducer';

import { Pizza, ProductsState } from '@products/models';


export const getPizzaState = createSelector(
  ProductsReducer.getProductsState,
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

export const getPizzaVisualised = createSelector(
  getSelectedPizza,
  ToppingsReducer.getToppingEntities,
  ToppingsReducer.getSelectedToppings,
  (pizza, toppingEntities, selectedToppings) => {
    const toppings = selectedToppings.map(id => toppingEntities[id]);
    return { ...pizza, toppings };
  }
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
