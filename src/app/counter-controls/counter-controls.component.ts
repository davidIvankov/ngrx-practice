import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { decrement, increment} from '../counter-store/counter.actions';



@Component({
  selector: 'app-counter-controls',
  templateUrl: './counter-controls.component.html',
  styleUrls: ['./counter-controls.component.css'],
})
export class CounterControlsComponent {
  constructor(private counterStore: Store) {}

  increment() {
    this.counterStore.dispatch(increment({value: 2}))
  }

  decrement() {
    this.counterStore.dispatch(decrement({value: 2}))
  }
}
