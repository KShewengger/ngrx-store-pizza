import { Injectable } from '@angular/core';

import { Effect, Actions, ofType } from '@ngrx/effects';

import { of } from 'rxjs';
import { map, catchError, switchMap } from 'rxjs/operators';

import { LOAD_TOPPINGS, LoadToppingsSuccess, LoadToppingsFail } from '@products/store/actions/toppings/toppings.action';
import { ToppingsService } from '@products/services/toppings.service';


@Injectable()
export class ToppingsEffects {

  constructor(
    private actions$: Actions,
    private toppingsService: ToppingsService
  ) {}

  @Effect()
  loadToppings$ = this.actions$
    .pipe(
      ofType(LOAD_TOPPINGS),
      switchMap(() => this.toppingsService
        .getToppings()
        .pipe(
          map(toppings => new LoadToppingsSuccess(toppings)),
          catchError(error => of(new LoadToppingsFail(error)))
        )
      )
    );

}

