import { Component, OnInit, Output, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { IAppState } from '../../store/app.state';
import { map } from 'rxjs';

@Component({
  selector: 'app-card-value',
  templateUrl: './card-value.component.html',
  styleUrls: ['./card-value.component.scss']
})
export class CardValueComponent implements OnInit {

  constructor(private store: Store<{app: IAppState}>) {}

  counter$ = this.store
    .select('app')
    .pipe(
      map((e: IAppState) => e.counter)
    )

  ngOnInit(): void {}

}
