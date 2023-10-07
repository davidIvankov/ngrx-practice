import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Store } from '@ngrx/store';
import { selectCount, selectdoubleCount } from '../counter-store/counter.selectors';

@Component({
  selector: 'app-counter-output',
  templateUrl: './counter-output.component.html',
  styleUrls: ['./counter-output.component.css'],
})
export class CounterOutputComponent {
  count$: Observable<number>;
  doubleCount$: Observable<number>;


  constructor(private counterStore: Store<{counter: number}>) {
    this.count$ = this.counterStore.select(selectCount);
    this.doubleCount$ = this.counterStore.select(selectdoubleCount);
  }
}
