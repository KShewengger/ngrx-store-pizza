import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot } from '@angular/router';

import { Store } from '@ngrx/store';

import { Observable } from 'rxjs';
import { tap, map, filter, take, switchMap } from 'rxjs/operators';

import { getPizzasEntities, getPizzasLoaded, LoadPizzas } from '@products/store';
import { Pizza, ProductsState } from '@products/models';


@Injectable()
export class PizzaExistsGuard implements CanActivate {

  constructor(private store: Store<ProductsState>) {}

  canActivate(route: ActivatedRouteSnapshot): Observable<boolean> {
    return this.checkStore()
      .pipe(
        switchMap(() => {
          const id = parseInt(route.params.pizzaId, 10);
          return this.hasPizza(id);
        })
      );
  }

  hasPizza(id: number): Observable<boolean> {
    return this.store
      .select(getPizzasEntities)
      .pipe(
        map((entities: { [key: number]: Pizza }) => !!entities[id]),
        take(1)
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
