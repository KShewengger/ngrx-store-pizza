import { Topping } from '@products/models/topping.model';


export interface Pizza {
  id?: number;
  name?: string;
  toppings?: Topping[];
}

export interface PizzaState {
  entities: { [id: number]: Pizza };
  loaded: boolean;
  loading: boolean;
}
