import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { ProductsRoutingModule } from '@products/products-routing.module';

import { reducers, effects } from '@products/store';
import { components } from '@products/components';
import { containers } from '@products/containers';
import { providers } from '@products/services';
import { guards } from '@products/guards';


@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    ProductsRoutingModule,
    StoreModule.forFeature('products', reducers),
    EffectsModule.forFeature(effects)
  ],
  providers: [ ...providers, ...guards ],
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
