import { TestBed } from '@angular/core/testing';
import { StoreModule, Store, combineReducers } from '@ngrx/store';

import * as IndexReducer from '@index/store/reducers';

import { Topping, ProductsState } from '@products/models';
import * as ProductsReducer from '@products/store/reducers';
import * as ProductsAction from '@products/store/actions';
import * as ToppingsSelector from './toppings.selector';


describe('ToppingsReducer Selectors', () => {

  let store: Store<ProductsState>;

  const toppings: Topping[] = [
    { id: 1, name: 'bacon' },
    { id: 2, name: 'pepperoni' },
    { id: 3, name: 'tomato' },
  ];

  const entities = {
    1: toppings[0],
    2: toppings[1],
    3: toppings[2],
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot({
          ...IndexReducer.reducers,
          products: combineReducers(ProductsReducer.reducers),
        }),
      ],
    });

    store = TestBed.inject(Store);

    spyOn(store, 'dispatch').and.callThrough();
  });

  describe('getToppingEntities', () => {
    it('should return toppings as entities', () => {
      let result;

      store
        .select(ToppingsSelector.getToppingEntities)
        .subscribe(value => (result = value));

      expect(result).toEqual({});

      store.dispatch(new ProductsAction.LoadToppingsSuccess(toppings));

      expect(result).toEqual(entities);
    });
  });

  describe('getSelectedToppings', () => {
    it('should return selected toppings as ids', () => {
      let result;

      store
        .select(ToppingsSelector.getSelectedToppings)
        .subscribe(value => (result = value));

      store.dispatch(new ProductsAction.LoadToppingsSuccess(toppings));

      expect(result).toEqual([]);

      store.dispatch(new ProductsAction.VisualiseToppings([1, 3]));

      expect(result).toEqual([1, 3]);
    });
  });

  describe('getAllToppings', () => {
    it('should return toppings as an array', () => {
      let result;

      store
        .select(ToppingsSelector.getAllToppings)
        .subscribe(value => (result = value));

      expect(result).toEqual([]);

      store.dispatch(new ProductsAction.LoadToppingsSuccess(toppings));

      expect(result).toEqual(toppings);
    });
  });

  describe('getToppingsLoaded', () => {
    it('should return the toppings loaded state', () => {
      let result;

      store
        .select(ToppingsSelector.getToppingsLoaded)
        .subscribe(value => (result = value));

      expect(result).toEqual(false);

      store.dispatch(new ProductsAction.LoadToppingsSuccess([]));

      expect(result).toEqual(true);
    });
  });

  describe('getToppingsLoading', () => {
    it('should return the toppings loading state', () => {
      let result;

      store
        .select(ToppingsSelector.getToppingsLoading)
        .subscribe(value => (result = value));

      expect(result).toEqual(false);

      store.dispatch(new ProductsAction.LoadToppings());

      expect(result).toEqual(true);
    });
  });

});
