import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { ProductsRoutingModule } from '@products/products-routing.module';

import { components } from '@products/components';
import { containers } from '@products/containers';
import { providers } from '@products/services';


@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    ProductsRoutingModule
  ],
  providers,
  declarations: [
    ...containers,
    ...components
  ],
  exports: [
    ...containers,
    ...components
  ],
})
export class ProductsModule {}
