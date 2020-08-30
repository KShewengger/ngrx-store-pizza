import * as Action from '@products/store/actions/pizzas.action';
import { PizzaState } from '@products/models/pizza.model';


export const initialState: PizzaState = {
  data: [],
  loaded: false,
  loading: false,
};

export function reducer(state: PizzaState = initialState, action: Action.PizzasAction): PizzaState {

  switch (action.type) {
    case Action.LOAD_PIZZAS: {
      return {
        ...state,
        loading: true
      };
    }

    case Action.LOAD_PIZZAS_SUCCESS: {
      const data = action.payload;

      return {
        ...state,
        loading: false,
        loaded: true,
        data
      };
    }

    case Action.LOAD_PIZZAS_FAIL: {
      return {
        ...state,
        loading: false,
        loaded: false
      };
    }
  }

  return state;

}


export const getPizzasLoading = (state: PizzaState) => state.loading;
export const getPizzasLoaded = (state: PizzaState) => state.loaded;
export const getPizzas = (state: PizzaState) => state.data;
