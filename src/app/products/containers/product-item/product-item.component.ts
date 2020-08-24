import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Pizza } from '@products/models/pizza.model';
import { PizzasService } from '@products/services/pizzas.service';

import { Topping } from '@products/models/topping.model';
import { ToppingsService } from '@products/services/toppings.service';


@Component({
  selector: 'app-product-item',
  styleUrls: ['product-item.component.scss'],
  templateUrl: './product-item.component.html',
})
export class ProductItemComponent implements OnInit {

  pizza: Pizza;
  visualise: Pizza;
  toppings: Topping[];

  constructor(
    private pizzaService: PizzasService,
    private toppingsService: ToppingsService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.initializeData();
  }

  initializeData(): void {
    this.pizzaService
      .getPizzas()
      .subscribe(pizzas => {
        const param = this.route.snapshot.params.id;
        this.pizza = param === 'new' ? {} : pizzas.find(pizza => pizza.id === parseInt(param, 10));

        this.toppingsService
          .getToppings()
          .subscribe(toppings => {
            this.toppings = toppings;
            this.onSelect(toppings.map(topping => topping.id));
          });
      });
  }

  onSelect(event: number[]): void {
    let toppings;

    if (this.toppings && this.toppings.length) toppings = event.map(id => this.toppings.find(topping => topping.id === id));
    else toppings = this.pizza.toppings;

    this.visualise = { ...this.pizza, toppings };
  }

  onCreate(event: Pizza): void {
    this.pizzaService
      .createPizza(event)
      .subscribe(pizza => this.router.navigate([`/products/${pizza.id}`]));
  }

  onUpdate(event: Pizza): void {
    this.pizzaService
      .updatePizza(event)
      .subscribe(() => this.router.navigate([`/products`]));
  }

  onRemove(event: Pizza): void {
    const remove = window.confirm('Are you sure?');

    if (remove) {
      this.pizzaService
        .removePizza(event)
        .subscribe(() => this.router.navigate([`/products`]));
    }
  }

}
