import { ElementRef, ViewChild } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { Observable} from 'rxjs';
import { startWith,map } from 'rxjs/operators';
import { ItemService } from 'src/app/shared/services/item.service';
import { OrderService } from 'src/app/shared/services/order.service';
import { AddCustomerComponent } from '../add-customer/add-customer.component';

@Component({
  selector: 'app-take-order',
  templateUrl: './take-order.component.html',
  styleUrls: ['./take-order.component.scss']
})

export class TakeOrderComponent implements OnInit {
  orderForm: FormGroup;
  orderDetails = [];
  itemDetails = [];
  recentOrdersList = [];
  displayedColumns: string[] = ['position', 'item', 'rate', 'quantity', 'price', 'action'];
  filteredOptions: Observable<any[]>;
  @ViewChild('quantityInput') quantityInput: ElementRef;
  @ViewChild('item') item: ElementRef;
  totalAmount;
  tables = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
  constructor(private fb: FormBuilder,
              private orderService :OrderService,
              private itemService :ItemService,
              private dialog: MatDialog,
              private toastr: ToastrService) { }

  ngOnInit(): void {
    this.initForm()
    this.availableItemForOrder();
    this.getOrderNumber();
    this.getRecentOrders();
  }
  ngAfterViewInit() {
    this.item.nativeElement.focus();
  }

  initForm(){
    this.orderForm=this.fb.group({
      _id:[null],
      orderNumber:[null, Validators.required],
      orderType:['TAKE_AWAY', Validators.required],
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
    this.orderForm.get('orderType').valueChanges.subscribe(data => {
      if (data == 'HOME_DELIVERY') {
        this.dialog.open(AddCustomerComponent, {data: null, width:'600px', disableClose: true}).afterClosed().subscribe(data => {
          this.orderForm.get('customer').setValue(data);
          this.item.nativeElement.focus();
        });
      } else {
        this.orderForm.get('customer').setValue(null);
      }
    });
    this.orderForm.get('quantity').valueChanges.subscribe(data => {
      if (data && data < 1) {
        this.orderForm.get('quantity').setValue(0);
      }
    });
    this.filteredOptions = this.orderForm.get('itemName').valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value))
    );
  }
  private _filter(value: string): any[] {
    if (!value) {
      return [];
    }
    if (typeof value == 'object') {
      return;
    }
    const filterValue = value.toLowerCase();
    return this.itemDetails.filter(option => option.itemName.toLowerCase().includes(filterValue));
  }
  
availableItemForOrder(){
  this.itemService.getAllAvailableItems().subscribe(data =>{
    this.itemDetails = data;
  });
}

saveOrder(){
    const itemData = this.orderForm.value;
    const itemDetails = itemData.itemName;
    if(typeof itemDetails == 'string' || !itemDetails) {
      this.orderForm.get('itemName').reset();
      return;
    }
    this.orderForm.patchValue({
      itemId:itemDetails._id,
      amount: this.orderForm.get('rate').value * itemData.quantity,
      itemName: itemDetails.itemName,
      sectionId: itemDetails.sectionId
    });
    if (this.orderForm.valid) {
      this.orderService.saveOrder(this.orderForm.value).subscribe(data=>{
        this.getOrdersByOrderNumber(this.orderForm.get('orderNumber').value);
        this.orderForm.get('itemName').reset();
        this.orderForm.get('quantity').reset();
        this.orderForm.get('rate').reset();
        this.item.nativeElement.focus();
      });
    }
}
displayFn(item): string {
  return item && item.itemName ? item.itemName : '';
}
jumpToQuantity(value) {
  if (value?.option?.value) {
    this.orderForm.get('itemName').setValue(value.option.value);
    this.orderForm.get('rate').setValue(value.option.value.amount);
  }
  if (this.quantityInput && this.quantityInput.nativeElement) {
    this.quantityInput.nativeElement.focus();
  }
}
getOrderNumber() {
  console.log('order nnumber');
  this.orderService.getOrderNumber().subscribe(data => {
    this.orderForm.get('orderNumber').setValue(data.orderNumber);
  });
}
getOrdersByOrderNumber(orderNumber) {
  this.orderService.getOrdersByOrderNumber(orderNumber).subscribe(data => {
    this.orderDetails = data;
    this.totalAmount = 0;
    this.orderDetails.forEach(x => {
      this.totalAmount += Number(x.amount);
    });
    this.orderForm.get('orderNumber').setValue(orderNumber);
    if (data && data.length > 0) {
      this.orderForm.get('orderType').setValue(data[0].orderType);
      this.orderForm.get('tableNumber').setValue(Number(data[0].tableNumber));
    }
    this.totalAmount.toFixed(2);
  });
}
getRecentOrders() {
  this.orderService.getRecentOrderList().subscribe(data => {
    this.recentOrdersList = data;
  });
}
deleteItem(item) {
  this.orderService.deleteOrderById(item._id).subscribe(data => {
    this.getOrdersByOrderNumber(item.orderNumber);
  });
}
print() {
  this.orderService.printOrderByOrderNumber(this.orderForm.get('orderNumber').value).subscribe(data => {
    this.orderDetails = [];
    this.getOrderNumber();
    this.totalAmount = null;
    this.toastr.success('Success', 'Bill Printed successfully');
  });
}
refreshOrderList() {
  this.orderDetails = [];
  this.getOrderNumber();
}
}  

