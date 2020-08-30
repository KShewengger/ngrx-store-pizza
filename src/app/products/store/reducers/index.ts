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

export const getAllPizzas = createSelector(getPizzaState, pizzaReducer.getPizzas);

export const getPizzasLoaded = createSelector(
  getPizzaState,
  pizzaReducer.getPizzasLoaded
);

export const getPizzasLoading = createSelector(
  getPizzaState,
  pizzaReducer.getPizzasLoading
);
