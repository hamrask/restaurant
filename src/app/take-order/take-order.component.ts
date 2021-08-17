import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-take-order',
  templateUrl: './take-order.component.html',
  styleUrls: ['./take-order.component.scss']
})
export class TakeOrderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  displayedColumns: string[] = ['position', 'item', 'quandity', 'price'];
  dataSource = ELEMENT_DATA;
}
const ELEMENT_DATA=[
  {position: 1, item: 'pizza', quandity: '2 Nos', price: '500'},
  
];
