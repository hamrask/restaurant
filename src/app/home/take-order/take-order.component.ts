import { ElementRef, ViewChild } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
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
  displayedColumns: string[] = ['position', 'item', 'quantity', 'price'];
  filteredOptions: Observable<any[]>;
  @ViewChild('quantityInput') quantityInput: ElementRef;
  @ViewChild('item') item: ElementRef;
  constructor(private fb: FormBuilder,
              private orderService :OrderService,
              private itemService :ItemService,
              private dialog: MatDialog) { }

  ngOnInit(): void {
    this.initForm()
    this.availableItemForOrder();
    this.getOrderNumber();
  }
  ngAfterViewInit() {
    this.item.nativeElement.focus();
  }

  initForm(){
    this.orderForm=this.fb.group({
      orderNumber:[null, Validators.required],
      orderType:['TAKE_AWAY', Validators.required],
      tableName:[null],
      itemId: [null, Validators.required],
      itemName:[null, Validators.required],
      rate: [null, Validators.required],
      quantity:[null, Validators.required],
      amount: [null, Validators.required],
      printedOrNot:[null],
      customerId: [null]
    });
    this.orderForm.get('orderType').valueChanges.subscribe(data => {
      if (data == 'HOME_DELIVERY') {
        this.dialog.open(AddCustomerComponent, {data: null, width:'600px', disableClose: true}).afterClosed().subscribe(data => {

        });
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
    itemData.itemId = itemDetails._id;
    itemData.rate = itemDetails.amount;
    itemData.amount = itemDetails.amount * itemData.quantity;
    itemData.itemName = itemDetails.itemName;
    this.orderForm.setValue(itemData);
    if (this.orderForm.valid) {
      this.orderService.saveOrder(itemData).subscribe(data=>{
        this.orderService.getAllOrder();
      });
      this.orderForm.reset();
    }
}
displayFn(item): string {
  return item && item.itemName ? item.itemName : '';
}
jumpToQuantity(value) {
  if (value?.option?.value) {
    this.orderForm.get('itemName').setValue(value.option.value);
  }
  if (this.quantityInput && this.quantityInput.nativeElement) {
    this.quantityInput.nativeElement.focus();
  }
}
getOrderNumber() {
  this.orderService.getOrderNumber().subscribe(data => {
    this.orderForm.get('orderNumber').setValue(data.orderNumber);
  });
}
getOrdersByOrderNumber(orderNumber) {
  
}
}  

