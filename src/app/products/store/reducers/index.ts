import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';

import { ProductsState } from '@app/products/models';

import { reducer as pizzasReducer } from './pizzas/pizzas.reducer';
import { reducer as toppingsReducer } from './toppings/toppings.reducer';


export const reducers: ActionReducerMap<ProductsState> = {
  pizzas: pizzasReducer,
  toppings: toppingsReducer
};

export const getProductsState = createFeatureSelector<ProductsState>('products');
