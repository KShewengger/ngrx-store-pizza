import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import { Store } from '@ngrx/store';

import { Pizza, ProductsState, Topping } from '@products/models';

import * as ProductsStore from '@products/store';


@Component({
  selector: 'app-product-item',
  styleUrls: ['product-item.component.scss'],
  templateUrl: './product-item.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
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
    this.pizza$ = this.store.select(ProductsStore.getSelectedPizza).pipe(
      tap((pizza: Pizza = null) => {
        const pizzaExists = !!(pizza && pizza.toppings);
        const toppings = pizzaExists
          ? pizza.toppings.map(topping => topping.id)
          : [];

        this.store.dispatch(new ProductsStore.VisualiseToppings(toppings));
      })
    );

    this.toppings$ = this.store.select(ProductsStore.getAllToppings);
    this.visualise$ = this.store.select(ProductsStore.getPizzaVisualised);
  }

  onSelect(event: number[]): void {
    this.store.dispatch(new ProductsStore.VisualiseToppings(event));
  }

  onCreate(event: Pizza): void {
    this.store.dispatch(new ProductsStore.CreatePizza(event));
  }

  onUpdate(event: Pizza): void {
    this.store.dispatch(new ProductsStore.UpdatePizza(event));
  }

  onRemove(event: Pizza): void {
    const remove = window.confirm('Are you sure?');

    if (remove) {
      this.store.dispatch(new ProductsStore.RemovePizza(event));
    }
  }

}
