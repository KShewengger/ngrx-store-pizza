import { Component, OnInit } from '@angular/core';

import { Pizza } from '@products/models/pizza.model';
import { PizzasService } from '@products/services/pizzas.service';


@Component({
  selector: 'app-products',
  styleUrls: ['products.component.scss'],
  templateUrl: './products.component.html',
})
export class ProductsComponent implements OnInit {

  pizzas: Pizza[];

  constructor(private pizzaService: PizzasService) {}

  ngOnInit(): void {
    this.initializeData();
  }

  initializeData(): void {
    this.pizzaService
      .getPizzas()
      .subscribe(pizzas => this.pizzas = pizzas);
  }

}
