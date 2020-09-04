import { Injectable } from '@angular/core';

import { of } from 'rxjs';
import { map, switchMap, catchError } from 'rxjs/operators';

import { Effect, Actions, ofType } from '@ngrx/effects';

import { PizzasService } from '@products/services';

import { LoadPizzasSuccess, LoadPizzasFail, LOAD_PIZZAS } from '@products/store/actions/pizzas.action';


@Injectable()
export class PizzasEffects {

  constructor(
    private actions$: Actions,
    private pizzaService: PizzasService
  ) {}

  @Effect()
  loadPizzas$ = this.actions$
    .pipe(
      ofType(LOAD_PIZZAS),
      switchMap(() => this.pizzaService
        .getPizzas()
        .pipe(
          map(pizzas => new LoadPizzasSuccess(pizzas)),
          catchError(error => of(new LoadPizzasFail(error)))
        )
      )
    );
}
