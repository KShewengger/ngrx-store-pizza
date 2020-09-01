import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { AppRoutingModule } from '@app/app-routing.module';

import { environment } from '@environments/environment';

import { META_REDUCERS, STORE_INSTRUMENT } from '@shared/config/ngrx.config';
import { API_URL } from '@shared/config/token.config';

import { AppComponent } from '@index/container/app.component';


@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    StoreModule.forRoot({}, { metaReducers: META_REDUCERS }),
    EffectsModule.forRoot([]),
    STORE_INSTRUMENT,
    AppRoutingModule
  ],
  declarations: [ AppComponent ],
  providers: [
    { provide: API_URL, useValue: environment.apiUrl }
  ],
  bootstrap: [ AppComponent ],
})
export class AppModule {}
