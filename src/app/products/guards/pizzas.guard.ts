import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';

import { Store } from '@ngrx/store';

import { Observable, of } from 'rxjs';
import { tap, filter, take, switchMap, catchError } from 'rxjs/operators';

import { ProductsState } from '@products/models';

import { getPizzasLoaded, LoadPizzas } from '@products/store';


@Injectable()
export class PizzasGuard implements CanActivate {

  constructor(private store: Store<ProductsState>) {}

  canActivate(): Observable<boolean> {
    return this.checkStore()
      .pipe(
        switchMap(() => of(true)),
        catchError(() => of(false))
      );
  }

  checkStore(): Observable<boolean> {
    return this.store
      .select(getPizzasLoaded)
      .pipe(
        tap(loaded => !loaded ? this.store.dispatch(new LoadPizzas()) : null),
        filter(loaded => loaded),
        take(1)
      );
  }

}
