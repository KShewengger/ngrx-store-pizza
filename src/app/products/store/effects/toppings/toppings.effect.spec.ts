import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { Actions } from '@ngrx/effects';

import { hot, cold } from 'jasmine-marbles';
import { Observable, of, EMPTY } from 'rxjs';

import { ToppingsService } from '@products/services/toppings.service';
import * as fromActions from '@products/store/actions/toppings/toppings.action';
import * as fromEffects from './toppings.effect';

import { environment } from '@environments/environment';
import { API_URL } from '@shared/config/token.config';


export class TestActions extends Actions {

  source: any;

  constructor() {
    super(EMPTY);
  }

  set stream(source: Observable<any>) {
    this.source = source;
  }

}

export function getActions(): Observable<any> {
  return new TestActions();
}


describe('ToppingsEffects', () => {

  let actions$: TestActions | any;
  let service: ToppingsService;
  let effects: fromEffects.ToppingsEffects;

  const toppings = [
    { id: 1, name: 'onion' },
    { id: 2, name: 'mushroom' },
    { id: 3, name: 'basil' },
  ];

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        ToppingsService,
        fromEffects.ToppingsEffects,
        { provide: Actions, useFactory: getActions },
        { provide: API_URL, useValue: environment.apiUrl },
      ],
    });

    actions$ = TestBed.inject(Actions);
    service = TestBed.inject(ToppingsService);
    effects = TestBed.inject(fromEffects.ToppingsEffects);

    spyOn(service, 'getToppings').and.returnValue(of(toppings));
  });

  describe('loadToppings$', () => {
    it('should return a collection from LoadToppingsSuccess', () => {
      const action = new fromActions.LoadToppings();
      const completion = new fromActions.LoadToppingsSuccess(toppings);

      actions$.stream = hot('-a', { a: action });
      const expected = cold('-b', { b: completion });

      expect(effects.loadToppings$).toBeObservable(expected);
    });
  });

});
