import * as fromToppings from '@products/store/actions/toppings.action';

import { Topping, ToppingsState } from '@products/models';



export const initialState: ToppingsState = {
  entities: {},
  loaded: false,
  loading: false,
};

export function reducer(state = initialState, action: fromToppings.ToppingsAction): ToppingsState {

  switch (action.type) {
    case fromToppings.LOAD_TOPPINGS: {
      return {
        ...state,
        loading: true,
      };
    }

    case fromToppings.LOAD_TOPPINGS_SUCCESS: {
      const entities = action
        .payload
        .reduce((stateEntities: { [id: number]: Topping }, topping: Topping) =>
          ({ ...stateEntities, [topping.id]: topping }),
          { ...state.entities }
      );

      return {
        ...state,
        loaded: true,
        loading: false,
        entities,
      };
    }

    case fromToppings.LOAD_TOPPINGS_FAIL: {
      return {
        ...state,
        loaded: false,
        loading: false,
      };
    }
  }

  return state;

}


export const getToppingEntities = (state: ToppingsState) => state.entities;
export const getToppingsLoaded = (state: ToppingsState) => state.loaded;
export const getToppingsLoading = (state: ToppingsState) => state.loading;
