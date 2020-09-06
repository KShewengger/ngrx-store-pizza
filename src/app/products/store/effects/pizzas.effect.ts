import { Injectable } from '@angular/core';

import { of } from 'rxjs';
import { map, switchMap, catchError } from 'rxjs/operators';

import { Effect, Actions, ofType } from '@ngrx/effects';

import { PizzasService } from '@products/services';

import * as PizzasAction from '@products/store/actions/pizzas.action';


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
  updatePizza$ = this.actions$
    .pipe(
      ofType(PizzasAction.UPDATE_PIZZA),
      map((action: PizzasAction.UpdatePizza) => action.payload),
      switchMap(pizza => {
        return this.pizzaService
          .updatePizza(pizza)
          .pipe(
            map(item => new PizzasAction.UpdatePizzaSuccess(item)),
            catchError(error => of(new PizzasAction.UpdatePizzaFail(error)))
          );
      })
  );
}
