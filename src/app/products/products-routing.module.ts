import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import * as containers from './containers';


const routes: Routes = [
  {
    path: '',
    component: containers.ProductsComponent,
  },
  {
    path: 'new',
    component: containers.ProductItemComponent,
  },
  {
    path: ':pizzaId',
    component: containers.ProductItemComponent,
  }
];


@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class ProductsRoutingModule { }
