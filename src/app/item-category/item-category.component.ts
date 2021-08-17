import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-item-category',
  templateUrl: './item-category.component.html',
  styleUrls: ['./item-category.component.scss']
})
export class ItemCategoryComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  displayedColumns: string[] = ['position', 'category', 'action'];
  dataSource = ELEMENT_DATA;
}
const ELEMENT_DATA= [
  {position: 1, category: 'juice', action: 'yes'},
  
];
