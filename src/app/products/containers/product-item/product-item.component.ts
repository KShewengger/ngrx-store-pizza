import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';

import { Store } from '@ngrx/store';

import { Pizza, ProductsState, Topping } from '@products/models';

import { getSelectedPizza, getAllToppings, LoadToppings } from '@products/store';


@Component({
  selector: 'app-product-item',
  styleUrls: ['product-item.component.scss'],
  templateUrl: './product-item.component.html',
})
export class ProductItemComponent implements OnInit {

  pizza$: Observable<Pizza>;
  toppings$: Observable<Topping[]>;
  visualise: Pizza;

  constructor(private store: Store<ProductsState>) {}

  ngOnInit(): void {
    this.store.dispatch(new LoadToppings());

    this.pizza$ = this.store.select(getSelectedPizza);
    this.toppings$ = this.store.select(getAllToppings);
  }

  onSelect(event: number[]): void {}

  onCreate(event: Pizza): void {}

  onUpdate(event: Pizza): void {}

  onRemove(event: Pizza): void {
    const remove = window.confirm('Are you sure?');
    if (remove) {

    }
  }

}
