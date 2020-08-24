import { MetaReducer } from '@ngrx/store';
import { storeFreeze } from 'ngrx-store-freeze';

import { environment } from '@environments/environment';


export const META_REDUCERS: MetaReducer<any>[] = !environment.production
  ? [storeFreeze]
  : [];
