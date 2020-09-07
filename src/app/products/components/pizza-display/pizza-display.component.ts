import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

import { Pizza } from '@products/models/pizza.model';
import { DROP_ANIMATION } from './pizza-display.animation';


@Component({
  selector: 'app-pizza-display',
  animations: [ DROP_ANIMATION ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['pizza-display.component.scss'],
  templateUrl: './pizza-display.component.html',
})
export class PizzaDisplayComponent {

  @Input() pizza: Pizza;

}
