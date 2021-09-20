import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ItemQuantityComponent } from 'src/app/shared/component/item-quantity/item-quantity.component';
import { ItemService } from 'src/app/shared/services/item.service';

@Component({
  selector: 'app-waiter-order',
  templateUrl: './waiter-order.component.html',
  styleUrls: ['./waiter-order.component.scss']
})
export class WaiterOrderComponent implements OnInit {
categories = [];
items = [];
filteredItems = [];
selectedCategory;
constructor(private item: ItemService, private popup: MatDialog) { }

  ngOnInit(): void {
    this.getAllCategories();
    this.getAllAvailableItems();
  }
  getAllCategories() {
    this.item.getAllCategory().subscribe(data => {
      this.categories = data;
    });
  }
  getAllAvailableItems() {
    this.item.getAllAvailableItems().subscribe(data => {
      this.filteredItems = this.items = data;
    });
  }
  filterItemsByCategory(categoryId) {
    if (this.selectedCategory == categoryId) {
      this.filteredItems = this.items;
      this.selectedCategory = null;
    } else {
      this.selectedCategory = categoryId;
      this.filteredItems = this.items.filter(x => x.categoryId == categoryId);
    }
  }
  selectItem(itemDetails) {
    this.popup.open(ItemQuantityComponent, {data: itemDetails, width:'280px', disableClose: true})
    .afterClosed().subscribe(data => {

    });
  }
}
