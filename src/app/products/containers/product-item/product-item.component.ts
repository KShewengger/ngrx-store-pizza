import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import { Store } from '@ngrx/store';

import { Pizza, ProductsState, Topping } from '@products/models';

import { getSelectedPizza, getAllToppings, getPizzaVisualised, VisualiseToppings, CreatePizza } from '@products/store';


@Component({
  selector: 'app-product-item',
  styleUrls: ['product-item.component.scss'],
  templateUrl: './product-item.component.html',
})
export class ProductItemComponent implements OnInit {

  pizza$: Observable<Pizza>;
  toppings$: Observable<Topping[]>;
  visualise$: Observable<Pizza>;

  constructor(private store: Store<ProductsState>) {}

  ngOnInit(): void {
    this.initializeData();
  }

  initializeData(): void {
    this.pizza$ = this.store.select(getSelectedPizza).pipe(
      tap((pizza: Pizza = null) => {
        const pizzaExists = !!(pizza && pizza.toppings);
        const toppings = pizzaExists
          ? pizza.toppings.map(topping => topping.id)
          : [];

        this.store.dispatch(new VisualiseToppings(toppings));
      })
    );

    this.toppings$ = this.store.select(getAllToppings);
    this.visualise$ = this.store.select(getPizzaVisualised);
  }

  onSelect(event: number[]): void {
    this.store.dispatch(new VisualiseToppings(event));
  }

  onCreate(event: Pizza): void {
    this.store.dispatch(new CreatePizza(event));
  }

  onUpdate(event: Pizza): void {}

  onRemove(event: Pizza): void {
    const remove = window.confirm('Are you sure?');

    if (remove) {

    }
  }

}
