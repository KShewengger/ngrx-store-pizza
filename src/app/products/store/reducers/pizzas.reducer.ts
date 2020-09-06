import * as Action from '@products/store/actions/pizzas.action';

import { Pizza, PizzaState } from '@products/models';


export const initialState: PizzaState = {
  entities: {},
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
      const entities = action
        .payload
        .reduce((stateEntities: { [id: number]: Pizza }, pizza: Pizza) =>
          ({...stateEntities, [pizza.id]: pizza}),
          { ...state.entities }
        );

      return {
        ...state,
        loading: false,
        loaded: true,
        entities
      };
    }

    case Action.LOAD_PIZZAS_FAIL: {
      return {
        ...state,
        loading: false,
        loaded: false
      };
    }

    case Action.CREATE_PIZZA_SUCCESS: {
      const pizza = action.payload;

      const entities = {
        ...state.entities,
        [pizza.id]: pizza,
      };

      return {
        ...state,
        entities
      };
    }
  }

  return state;

}


export const getPizzasLoading = (state: PizzaState) => state.loading;
export const getPizzasLoaded = (state: PizzaState) => state.loaded;
export const getPizzasEntities = (state: PizzaState) => state.entities;
