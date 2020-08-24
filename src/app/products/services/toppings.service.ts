import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Topping } from '@products/models/topping.model';

import { API_URL } from '@shared/config/token.config';


@Injectable()
export class ToppingsService {

  constructor(
    @Inject(API_URL) private apiUrl: string,
    private http: HttpClient
  ) {}

  getToppings(): Observable<Topping[]> {
    return this.http
      .get<Topping[]>(`${this.apiUrl}/toppings`)
      .pipe(catchError((error: any) => throwError(error.json())));
  }

}
