import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import * as containers from './containers';


const routes: Routes = [
  {
    path: '',
    component: containers.ProductsComponent,
  },
  {
    path: ':id',
    component: containers.ProductItemComponent,
  },
  {
    path: 'new',
    component: containers.ProductItemComponent,
  },
];


@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class ProductsRoutingModule { }
