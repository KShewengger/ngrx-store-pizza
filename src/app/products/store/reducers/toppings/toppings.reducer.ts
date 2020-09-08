import * as Action from '@products/store/actions/toppings/toppings.action';

import { Topping, ToppingsState } from '@products/models';



export const initialState: ToppingsState = {
  entities: {},
  loaded: false,
  loading: false,
  selectedToppings: []
};

export function reducer(state = initialState, action: Action.ToppingsAction): ToppingsState {

  switch (action.type) {
    case Action.VISUALISE_TOPPINGS: {
      const selectedToppings = action.payload;

      return {
        ...state,
        selectedToppings
      };
    }


    case Action.LOAD_TOPPINGS: {
      return {
        ...state,
        loading: true,
      };
    }

    case Action.LOAD_TOPPINGS_SUCCESS: {
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

    case Action.LOAD_TOPPINGS_FAIL: {
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
export const getSelectedToppings = (state: ToppingsState) => state.selectedToppings;
