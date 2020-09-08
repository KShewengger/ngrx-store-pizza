import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { Actions } from '@ngrx/effects';

import { hot, cold } from 'jasmine-marbles';
import { Observable, of, EMPTY } from 'rxjs';

import { PizzasService } from '@products/services/pizzas.service';
import * as PizzasAction from '@products/store/actions/pizzas/pizzas.action';
import * as PizzasEffect from './pizzas.effect';

import { environment } from '@environments/environment';
import { API_URL } from '@shared/config/token.config';


export class TestActions extends Actions {

  source: any;

  constructor() {
    super(EMPTY);
  }

  set stream(source: Observable<any>) {
    this.source = source;
  }

}

export function getActions(): any {
  return new TestActions();
}


describe('PizzasEffects', () => {
  let actions$: TestActions | any;
  let service: PizzasService;
  let effects: PizzasEffect.PizzasEffects;

  const pizzas = [
    {
      id: 1,
      name: 'Pizza #1',
      toppings: [
        { id: 1, name: 'onion' },
        { id: 2, name: 'mushroom' },
        { id: 3, name: 'basil' },
      ],
    },
    {
      id: 2,
      name: 'Pizza #2',
      toppings: [
        { id: 1, name: 'onion' },
        { id: 2, name: 'mushroom' },
        { id: 3, name: 'basil' },
      ],
    },
  ];

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        PizzasService,
        PizzasEffect.PizzasEffects,
        { provide: Actions, useFactory: getActions },
        { provide: API_URL, useValue: environment.apiUrl },
      ],
    });

    actions$ = TestBed.inject(Actions);
    service = TestBed.inject(PizzasService);
    effects = TestBed.inject(PizzasEffect.PizzasEffects);

    spyOn(service, 'getPizzas').and.returnValue(of(pizzas));
    spyOn(service, 'createPizza').and.returnValue(of(pizzas[0]));
    spyOn(service, 'updatePizza').and.returnValue(of(pizzas[0]));
    spyOn(service, 'removePizza').and.returnValue(of(pizzas[0]));
  });

  describe('loadPizzas$', () => {
    it('should return a collection from LoadPizzasSuccess', () => {
      const action = new PizzasAction.LoadPizzas();
      const completion = new PizzasAction.LoadPizzasSuccess(pizzas);

      actions$.stream = hot('-a', { a: action });
      const expected = cold('-b', { b: completion });

      expect(effects.loadPizzas$).toBeObservable(expected);
    });
  });

  describe('createPizza$', () => {
    it('should work', () => {
      const action = new PizzasAction.CreatePizza(pizzas[0]);
      const completion = new PizzasAction.CreatePizzaSuccess(pizzas[0]);

      actions$.stream = hot('-a', { a: action });
      const expected = cold('-c', { c: completion });

      expect(effects.createPizza$).toBeObservable(expected);
    });
  });

  describe('updatePizza$', () => {
    it('should work', () => {
      const action = new PizzasAction.UpdatePizza(pizzas[0]);
      const completion = new PizzasAction.UpdatePizzaSuccess(pizzas[0]);

      actions$.stream = hot('-a', { a: action });
      const expected = cold('-c', { c: completion });

      expect(effects.updatePizza$).toBeObservable(expected);
    });
  });

  describe('removePizza$', () => {
    it('should work', () => {
      const action = new PizzasAction.RemovePizza(pizzas[0]);
      const completion = new PizzasAction.RemovePizzaSuccess(pizzas[0]);

      actions$.stream = hot('-a', { a: action });
      const expected = cold('-c', { c: completion });

      expect(effects.removePizza$).toBeObservable(expected);
    });
  });

});
