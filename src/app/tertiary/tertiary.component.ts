import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CartState } from '../cart/cart.state';
import { Observable } from 'rxjs';
import { Store } from '@ngxs/store';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tertiary',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './tertiary.component.html',
  styleUrl: './tertiary.component.css',
})
export class TertiaryComponent {
  count!: Observable<number>;

  constructor(private store: Store) {
    this.count! = this.store.select(CartState.count);
  }
}
