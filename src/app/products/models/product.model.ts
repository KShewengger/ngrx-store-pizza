import { PizzaState, ToppingsState } from '@products/models';


export interface ProductsState {
  pizzas: PizzaState;
  toppings: ToppingsState;
}
