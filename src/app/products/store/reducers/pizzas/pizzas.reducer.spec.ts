import * as PizzasReducer from './pizzas.reducer';

import * as PizzasAction from '@products/store/actions/pizzas/pizzas.action';
import { Pizza } from '@products/models/pizza.model';


describe('PizzasReducer', () => {

  describe('undefined action', () => {
    it('should return the default state', () => {
      const { initialState } = PizzasReducer;
      const action = {} as any;
      const state = PizzasReducer.reducer(undefined, action);

      expect(state).toBe(initialState);
    });
  });

  describe('LOAD_PIZZAS action', () => {
    it('should set loading to true', () => {
      const { initialState } = PizzasReducer;
      const action = new PizzasAction.LoadPizzas();
      const state = PizzasReducer.reducer(initialState, action);

      expect(state.loading).toEqual(true);
      expect(state.loaded).toEqual(false);
      expect(state.entities).toEqual({});
    });
  });

  describe('LOAD_PIZZAS_SUCCESS action', () => {
    it('should populate the toppings array', () => {
      const pizzas: Pizza[] = [
        { id: 1, name: 'Pizza #1', toppings: [] },
        { id: 2, name: 'Pizza #2', toppings: [] },
      ];
      const entities = {
        1: pizzas[0],
        2: pizzas[1],
      };
      const { initialState } = PizzasReducer;
      const action = new PizzasAction.LoadPizzasSuccess(pizzas);
      const state = PizzasReducer.reducer(initialState, action);

      expect(state.loaded).toEqual(true);
      expect(state.loading).toEqual(false);
      expect(state.entities).toEqual(entities);
    });
  });

  describe('LOAD_PIZZAS_FAIL action', () => {
    it('should return the initial state', () => {
      const { initialState } = PizzasReducer;
      const action = new PizzasAction.LoadPizzasFail({});
      const state = PizzasReducer.reducer(initialState, action);

      expect(state).toEqual(initialState);
    });

    it('should return the previous state', () => {
      const { initialState } = PizzasReducer;
      const previousState = { ...initialState, loading: true };
      const action = new PizzasAction.LoadPizzasFail({});
      const state = PizzasReducer.reducer(previousState, action);

      expect(state).toEqual(initialState);
    });
  });

  describe('CREATE_PIZZA_SUCCESS action', () => {
    it('should add the new pizza to the pizzas array', () => {
      const pizzas: Pizza[] = [
        { id: 1, name: 'Pizza #1', toppings: [] },
        { id: 2, name: 'Pizza #2', toppings: [] },
      ];
      const newPizza: Pizza = {
        id: 3,
        name: 'Pizza #3',
        toppings: [],
      };
      const entities = {
        1: pizzas[0],
        2: pizzas[1],
      };
      const { initialState } = PizzasReducer;
      const previousState = { ...initialState, entities };
      const action = new PizzasAction.CreatePizzaSuccess(newPizza);
      const state = PizzasReducer.reducer(previousState, action);

      expect(Object.keys(state.entities).length).toEqual(3);
      expect(state.entities).toEqual({ ...entities, 3: newPizza });
    });
  });

  describe('UPDATE_PIZZA_SUCCESS action', () => {
    it('should update the pizza', () => {
      const pizzas: Pizza[] = [
        { id: 1, name: 'Pizza #1', toppings: [] },
        { id: 2, name: 'Pizza #2', toppings: [] },
      ];
      const updatedPizza = {
        id: 2,
        name: 'Pizza #2',
        toppings: [{ id: 1, name: 'basil' }],
      };
      const entities = {
        1: pizzas[0],
        2: pizzas[1],
      };
      const { initialState } = PizzasReducer;
      const previousState = { ...initialState, entities };
      const action = new PizzasAction.UpdatePizzaSuccess(updatedPizza);
      const state = PizzasReducer.reducer(previousState, action);

      expect(Object.keys(state.entities).length).toEqual(2);
      expect(state.entities).toEqual({ ...entities, 2: updatedPizza });
    });
  });

  describe('REMOVE_PIZZA_SUCCESS action', () => {
    it('should remove the pizza', () => {
      const pizzas: Pizza[] = [
        { id: 1, name: 'Pizza #1', toppings: [] },
        { id: 2, name: 'Pizza #2', toppings: [] },
      ];
      const entities = {
        1: pizzas[0],
        2: pizzas[1],
      };
      const { initialState } = PizzasReducer;
      const previousState = { ...initialState, entities };
      const action = new PizzasAction.RemovePizzaSuccess(pizzas[0]);
      const state = PizzasReducer.reducer(previousState, action);

      expect(Object.keys(state.entities).length).toEqual(1);
      expect(state.entities).toEqual({ 2: pizzas[1] });
    });
  });
});

describe('PizzasReducer Selectors', () => {
  describe('getPizzaEntities', () => {
    it('should return .entities', () => {
      const entities: { [key: number]: Pizza } = {
        1: { id: 1, name: 'Pizza #1', toppings: [] },
        2: { id: 2, name: 'Pizza #2', toppings: [] },
      };
      const { initialState } = PizzasReducer;
      const previousState = { ...initialState, entities };
      const slice = PizzasReducer.getPizzasEntities(previousState);

      expect(slice).toEqual(entities);
    });
  });

  describe('getPizzasLoading', () => {
    it('should return .loading', () => {
      const { initialState } = PizzasReducer;
      const previousState = { ...initialState, loading: true };
      const slice = PizzasReducer.getPizzasLoading(previousState);

      expect(slice).toEqual(true);
    });
  });

  describe('getPizzasLoaded', () => {
    it('should return .loaded', () => {
      const { initialState } = PizzasReducer;
      const previousState = { ...initialState, loaded: true };
      const slice = PizzasReducer.getPizzasLoaded(previousState);

      expect(slice).toEqual(true);
    });
  });

});
