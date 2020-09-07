import { Injectable } from '@angular/core';

import { of } from 'rxjs';
import { map, switchMap, catchError } from 'rxjs/operators';

import { Effect, Actions, ofType } from '@ngrx/effects';

import { Go } from '@index/store';

import { PizzasService } from '@products/services';
import * as PizzasAction from '@products/store/actions/pizzas/pizzas.action';


@Injectable()
export class PizzasEffects {

  constructor(
    private actions$: Actions,
    private pizzaService: PizzasService
  ) {}

  @Effect()
  loadPizzas$ = this.actions$
    .pipe(
      ofType(PizzasAction.LOAD_PIZZAS),
      switchMap(() => this.pizzaService
        .getPizzas()
        .pipe(
          map(pizzas => new PizzasAction.LoadPizzasSuccess(pizzas)),
          catchError(error => of(new PizzasAction.LoadPizzasFail(error)))
        )
      )
    );

  @Effect()
  createPizza$ = this.actions$
    .pipe(
      ofType(PizzasAction.CREATE_PIZZA),
      map((action: PizzasAction.CreatePizza) => action.payload),
      switchMap(pizza => this.pizzaService
        .createPizza(pizza)
        .pipe(
          map(item => new PizzasAction.CreatePizzaSuccess(item)),
          catchError(error => of(new PizzasAction.CreatePizzaFail(error)))
        )
      )
    );

  @Effect()
  createPizzaSuccess$ = this.actions$
    .pipe(
      ofType(PizzasAction.CREATE_PIZZA_SUCCESS),
      map((action: PizzasAction.CreatePizzaSuccess) => action.payload),
      map(pizza => new Go({ path: ['/products', pizza.id] }))
    );

  @Effect()
  updatePizza$ = this.actions$
    .pipe(
      ofType(PizzasAction.UPDATE_PIZZA),
      map((action: PizzasAction.UpdatePizza) => action.payload),
      switchMap(pizza => this.pizzaService
        .updatePizza(pizza)
        .pipe(
          map(item => new PizzasAction.UpdatePizzaSuccess(item)),
          catchError(error => of(new PizzasAction.UpdatePizzaFail(error)))
        )
      )
  );

  @Effect()
  removePizza$ = this.actions$
    .pipe(
      ofType(PizzasAction.REMOVE_PIZZA),
      map((action: PizzasAction.RemovePizza) => action.payload),
      switchMap(pizza => this.pizzaService
        .removePizza(pizza)
        .pipe(
          map(() => new PizzasAction.RemovePizzaSuccess(pizza)),
          catchError(error => of(new PizzasAction.RemovePizzaFail(error)))
        )
      )
  );

  @Effect()
  handlePizzaSuccess$ = this.actions$
    .pipe(
      ofType(
        PizzasAction.UPDATE_PIZZA_SUCCESS,
        PizzasAction.REMOVE_PIZZA_SUCCESS
      ),
      map(() => new Go({ path: ['/products'] }))
    );

}
