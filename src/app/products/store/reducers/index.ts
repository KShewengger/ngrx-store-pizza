import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';

import * as pizzaReducer from './pizzas.reducer';
import { PizzaState } from '@app/products/models';


export interface ProductsState {
  pizzas: PizzaState;
}

export const reducers: ActionReducerMap<ProductsState> = {
  pizzas: pizzaReducer.reducer,
};

export const getProductsState = createFeatureSelector<ProductsState>('products');
