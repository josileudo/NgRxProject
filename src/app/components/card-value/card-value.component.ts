import { Component, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-card-value',
  templateUrl: './card-value.component.html',
  styleUrls: ['./card-value.component.scss']
})
export class CardValueComponent implements OnInit {
  @Input() counter = 0;

  // counter = 0;

  constructor() {}

  ngOnInit(): void {}

}
