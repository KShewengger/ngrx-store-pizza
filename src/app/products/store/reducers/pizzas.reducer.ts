import * as Action from '@products/store/actions/pizzas.action';
import { PizzaState } from '@products/models/pizza.model';


export const initialState: PizzaState = {
  data: [
    {
      name: `Blazin' Inferno`,
      toppings: [
        {
          id: 10,
          name: 'pepperoni'
        },
        {
          id: 9,
          name: 'pepper'
        },
        {
          id: 3,
          name: 'basil'
        },
        {
          id: 4,
          name: 'chili'
        },
        {
          id: 7,
          name: 'olive'
        },
        {
          id: 2,
          name: 'bacon'
        },
        {
          id: 1,
          name: 'anchovy'
        },
        {
          id: 6,
          name: 'mushroom'
        },
        {
          id: 11,
          name: 'sweetcorn'
        },
        {
          id: 8,
          name: 'onion'
        },
        {
          id: 12,
          name: 'tomato'
        },
        {
          id: 5,
          name: 'mozzarella'
        }
      ],
      id: 1
    }
  ],
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
      return {
        ...state,
        loading: false,
        loaded: true
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
