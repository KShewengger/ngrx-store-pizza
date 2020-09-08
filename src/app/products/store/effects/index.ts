import { PizzasEffects } from './pizzas/pizzas.effect';
import { ToppingsEffects } from './toppings/toppings.effect';


export const effects: any[] = [ PizzasEffects, ToppingsEffects ];

export * from './pizzas/pizzas.effect';
export * from './toppings/toppings.effect';
