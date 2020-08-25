import { MetaReducer } from '@ngrx/store';
import { storeFreeze } from 'ngrx-store-freeze';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { environment } from '@environments/environment';


const isDevelopment = !environment.production;

export const META_REDUCERS: MetaReducer[] = isDevelopment
  ? [storeFreeze]
  : [];

export const STORE_INSTRUMENT = isDevelopment
  ? StoreDevtoolsModule.instrument()
  : [];
