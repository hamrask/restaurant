import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-order-page',
  templateUrl: './main-order-page.component.html',
  styleUrls: ['./main-order-page.component.scss']
})
export class MainOrderPageComponent implements OnInit {
  tabs = [1];
  constructor() { }

  ngOnInit(): void {
  }
  addTab() {
    this.tabs.push(1);
  }
}
