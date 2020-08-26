import { ActionReducerMap } from '@ngrx/store';

import { ProductsState } from '@products/models/product.model';
import { reducer } from './pizzas.reducer';


export const reducers: ActionReducerMap<ProductsState> = {
  pizzas: reducer
};
