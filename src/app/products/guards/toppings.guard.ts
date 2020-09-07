import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';

import { Store } from '@ngrx/store';

import { Observable, of } from 'rxjs';
import { tap, filter, take, switchMap, catchError } from 'rxjs/operators';

import { ProductsState } from '@products/models';
import { getToppingsLoaded, LoadToppings } from '@products/store';


@Injectable()
export class ToppingsGuard implements CanActivate {

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
      .select(getToppingsLoaded)
      .pipe(
        tap(loaded => !loaded ? this.store.dispatch(new LoadToppings()) : null),
        filter(loaded => loaded),
        take(1)
      );
  }

}
