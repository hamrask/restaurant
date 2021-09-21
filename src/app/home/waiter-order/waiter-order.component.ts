import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ItemQuantityComponent } from 'src/app/shared/component/item-quantity/item-quantity.component';
import { OrderBillComponent } from 'src/app/shared/component/order-bill/order-bill.component';
import { ItemService } from 'src/app/shared/services/item.service';
import { OrderService } from 'src/app/shared/services/order.service';

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
orderForm: FormGroup;
orderDetails = [];
@ViewChild(OrderBillComponent) orderbill: OrderBillComponent;
constructor(private item: ItemService, private popup: MatDialog,
            private _formBuilder: FormBuilder, private orderService: OrderService) { }

  ngOnInit(): void {
    this.getAllCategories();
    this.getAllAvailableItems();
    this.initForm();
    this.getOrderNumber();
  }
  initForm() {
    this.orderForm=this._formBuilder.group({
      _id:[null],
      orderNumber:[null, Validators.required],
      orderType:['', Validators.required],
      tableNumber:[null],
      itemId: [null, Validators.required],
      itemName:[null, Validators.required],
      rate: [null, Validators.required],
      quantity:[null, Validators.required],
      amount: [null, Validators.required],
      printedOrNot:[null],
      customer: [null],
      sectionId: [null, Validators.required]
    });
  }
  getOrderNumber() {
    this.orderService.getOrderNumber().subscribe(data => {
      this.orderForm.get('orderNumber').setValue(data.orderNumber);
    });
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
      this.orderForm.get('itemName').setValue(data);
      this.saveOrder();
    });
  }
  saveOrder(){
    const itemData = this.orderForm.value;
    const itemDetails = itemData.itemName;
    this.orderForm.patchValue({
      itemId:itemDetails._id,
      amount: Number(itemDetails.amount) * Number(itemDetails.quantity),
      itemName: itemDetails.itemName,
      sectionId: itemDetails.sectionId,
      quantity: Number(itemDetails.quantity),
      rate: Number(itemDetails.amount)
    });
    if (this.orderForm.valid) {
      this.orderService.saveOrder(this.orderForm.value).subscribe(data=>{
        this.getOrdersByOrderNumber(this.orderForm.get('orderNumber').value);
      });
    }
}
getOrdersByOrderNumber(orderNumber) {
  this.orderService.getOrdersByOrderNumber(orderNumber).subscribe(data => {
    this.orderDetails = data;
    this.orderbill.orderDetails = data;
    this.orderbill.TotalAmount = this.orderService.getTotalAmount(data);
    this.orderbill.OrderNumber = orderNumber;
  });
}
}
