import { Component, Input, ChangeDetectionStrategy } from '@angular/core';


@Component({
  selector: 'app-pizza-item',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['pizza-item.component.scss'],
  templateUrl: './pizza-item.component.html',
})
export class PizzaItemComponent {

  @Input() pizza: any;

}
