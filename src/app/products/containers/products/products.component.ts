import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';

import { Store } from '@ngrx/store';

import { Pizza, ProductsState } from '@products/models';
import { getAllPizzas } from '@products/store';


@Component({
  selector: 'app-products',
  styleUrls: ['products.component.scss'],
  templateUrl: './products.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductsComponent implements OnInit {

  pizzas$: Observable<Pizza[]>;

  constructor(private store: Store<ProductsState>) {}

  ngOnInit(): void {
    this.pizzas$ = this.store.select(getAllPizzas);
  }

}
