import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';

import * as pizzaReducer from './pizzas.reducer';
import { ProductsState } from '@app/products/models';


export const reducers: ActionReducerMap<ProductsState> = {
  pizzas: pizzaReducer.reducer,
};

export const getProductsState = createFeatureSelector<ProductsState>('products');
