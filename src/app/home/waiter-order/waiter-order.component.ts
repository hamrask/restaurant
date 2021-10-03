import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
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
@Output() close = new EventEmitter(true);
constructor(private item: ItemService, private popup: MatDialog, 
            private _formBuilder: FormBuilder, private orderService: OrderService,
            private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getAllCategories();
    this.getAllAvailableItems();
    this.initForm();
    const orderNumber = this.route.snapshot.params.orderNumber;
    if (orderNumber) {
      this.getOrdersByOrderNumber(orderNumber);
    }
  }
  initForm() {
    this.orderForm = this._formBuilder.group({
      _id:[null],
      orderNumber:[null],
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
      if (data) {
        this.orderForm.get('itemName').setValue(data);
        this.saveOrder();
      }
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
        if (data && (data as any).orderNumber) {
          this.getOrdersByOrderNumber((data as any).orderNumber);
        }
      });
    }
}
getOrdersByOrderNumber(orderNumber) {
  this.orderService.getOrdersByOrderNumber(orderNumber).subscribe(data => {
    this.orderDetails = data;
    this.orderbill.orderDetails = data;
    this.orderbill.TotalAmount = this.orderService.getTotalAmount(data);
    this.orderbill.OrderNumber = orderNumber;
    this.orderForm.get('orderNumber').setValue(orderNumber);
    this.orderForm.get('orderType').setValue(data[0].orderType);
    this.orderForm.get('tableNumber').setValue(data[0].tableNumber);
  });
}
deleteOrder(order) {
  this.orderService.deleteOrderById(order._id).subscribe(data => {
    this.getOrdersByOrderNumber(order.orderNumber);
  });
}
checkAction(orderData) {
  if (orderData.action == 'DELETE') {
    this.deleteOrder(orderData.order);
  }
  if (orderData.action == 'EDIT') {
    this.orderForm.patchValue(orderData.order);
    const itemDetails = {
      _id: orderData.order.itemId,
      itemName: orderData.order.itemName,
      amount: orderData.order.rate,
      quantity: orderData.order.quantity,
      sectionId: orderData.order.sectionId
    }
    this.selectItem(itemDetails);
  }
  if (orderData.action == 'CLOSE') {
    this.close.emit(true);
  }
}
}
