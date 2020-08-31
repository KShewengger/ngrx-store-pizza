import { ActionReducerMap, createSelector, createFeatureSelector } from '@ngrx/store';

import * as pizzaReducer from './pizzas.reducer';
import { PizzaState } from '@app/products/models';


export interface ProductsState {
  pizzas: PizzaState;
}

export const reducers: ActionReducerMap<ProductsState> = {
  pizzas: pizzaReducer.reducer,
};

export const getProductsState = createFeatureSelector<ProductsState>(
  'products'
);

// pizzas state
export const getPizzaState = createSelector(
  getProductsState,
  (state: ProductsState) => state.pizzas
);

export const getPizzasEntities = createSelector(
  getPizzaState,
  pizzaReducer.getPizzasEntities
);

export const getAllPizzas = createSelector(getPizzasEntities, entities => Object
  .keys(entities)
  .map(id => entities[parseInt(id, 10)]));

export const getPizzasLoaded = createSelector(getPizzaState, pizzaReducer.getPizzasLoaded);
export const getPizzasLoading = createSelector(getPizzaState, pizzaReducer.getPizzasLoading);
