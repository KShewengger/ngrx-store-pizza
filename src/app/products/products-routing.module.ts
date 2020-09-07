import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import * as containers from './containers';
import { PizzasGuard, PizzaExistsGuard } from '@products/guards';


const routes: Routes = [
  {
    path: '',
    component: containers.ProductsComponent,
    canActivate: [ PizzasGuard ]
  },
  {
    path: 'new',
    component: containers.ProductItemComponent,
    canActivate: [ PizzasGuard ]
  },
  {
    path: ':pizzaId',
    component: containers.ProductItemComponent,
    canActivate: [ PizzaExistsGuard ]
  }
];


@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class ProductsRoutingModule { }
