import { Component, Input, ChangeDetectionStrategy, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

import { Topping } from '@products/models/topping.model';


const PIZZA_TOPPINGS_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => PizzaToppingsComponent),
  multi: true,
};


@Component({
  selector: 'app-pizza-toppings',
  providers: [ PIZZA_TOPPINGS_ACCESSOR ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['pizza-toppings.component.scss'],
  templateUrl: './pizza-toppings.component.html',
})
export class PizzaToppingsComponent implements ControlValueAccessor {

  @Input() toppings: Topping[] = [];

  value: Topping[] = [];

  private onTouch: () => void;
  private onModelChange: (value?: any) => void;

  registerOnChange(fn: () => void): void {
    this.onModelChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouch = fn;
  }

  writeValue(value: Topping[]): void {
    this.value = value;
  }

  selectTopping(topping: Topping): void {
    this.value = this.existsInToppings(topping)
      ? this.value.filter(item => item.id !== topping.id)
      : [...this.value, topping];

    this.onTouch();
    this.onModelChange(this.value);
  }

  existsInToppings(topping: Topping): any {
    return this.value.some(val => val.id === topping.id);
  }

}
