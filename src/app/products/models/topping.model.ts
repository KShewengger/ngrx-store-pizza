export interface Topping {
  id?: number;
  name?: string;
  [key: string]: any;
}

export interface ToppingsState {
  entities: { [id: number]: Topping };
  loaded: boolean;
  loading: boolean;
  selectedToppings: number[];
}
