import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Pizza } from '@products/models/pizza.model';
import { API_URL } from '@shared/config/token.config';


@Injectable()
export class PizzasService {

  constructor(
    @Inject(API_URL) private apiUrl: string,
    private http: HttpClient
  ) {}

  pizzaApiRoute(params?: any): string {
    params = params ? `/${params}` : '';

    return `${this.apiUrl}/pizzas${params}`;
  }

  getPizzas(): Observable<Pizza[]> {
    return this.http
      .get<Pizza[]>(this.pizzaApiRoute())
      .pipe(catchError((error: any) => throwError(error)));
  }

  createPizza(payload: Pizza): Observable<Pizza> {
    return this.http
      .post<Pizza>(this.pizzaApiRoute(), payload)
      .pipe(catchError((error: any) => throwError(error)));
  }

  updatePizza(payload: Pizza): Observable<Pizza> {
    return this.http
      .put<Pizza>(this.pizzaApiRoute(payload.id), payload)
      .pipe(catchError((error: any) => throwError(error)));
  }

  removePizza(payload: Pizza): Observable<Pizza> {
    return this.http
      .delete<any>(this.pizzaApiRoute(payload.id))
      .pipe(catchError((error: any) => throwError(error)));
  }

}
