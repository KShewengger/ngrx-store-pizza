import { NgModule, InjectionToken } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppRoutingModule } from '@app/app-routing.module';

import { environment } from '@environments/environment';

import { META_REDUCERS } from '@shared/config/meta.config';
import { API_URL } from '@shared/config/token.config';

import { AppComponent } from '@index/app.component';

const InstrumentModule = !environment.production ? StoreDevtoolsModule.instrument() : [];


@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    StoreModule.forRoot({}, { metaReducers: META_REDUCERS }),
    EffectsModule.forRoot([]),
    InstrumentModule,
    AppRoutingModule
  ],
  declarations: [ AppComponent ],
  providers: [
    { provide: API_URL, useValue: environment.apiUrl }
  ],
  bootstrap: [ AppComponent ],
})
export class AppModule {}
