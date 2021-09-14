import { ElementRef, ViewChild } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable} from 'rxjs';
import { startWith,map } from 'rxjs/operators';
import { ItemService } from 'src/app/shared/services/item.service';
import { OrderService } from 'src/app/shared/services/order.service';

@Component({
  selector: 'app-take-order',
  templateUrl: './take-order.component.html',
  styleUrls: ['./take-order.component.scss']
})

export class TakeOrderComponent implements OnInit {
  title = 'Take Order'
  orderForm: FormGroup;
  orderDetails = [];
  itemDetails = [];
  displayedColumns: string[] = ['position', 'item', 'quantity', 'price'];
  filteredOptions: Observable<any[]>;
  @ViewChild('quantityInput') quantityInput: ElementRef;
  constructor(private fb: FormBuilder, private orderService :OrderService, private itemService :ItemService) { }

  ngOnInit(): void {
    this.initForm()
    this.availableItemForOrder();
    
  }

  initForm(){
    this.orderForm=this.fb.group({
      queueNumber:[null, Validators.required],
      orderType:['HOME_DELIVERY', Validators.required],
      tableName:[null],
      itemId: [null, Validators.required],
      itemName:[null, Validators.required],
      rate: [null, Validators.required],
      quantity:[1, Validators.required],
      amount: [null, Validators.required],
      printedOrNot:[null]
    });
    this.orderForm.get('orderType').valueChanges.subscribe(data => {
      console.log(data);
    });
    this.orderForm.get('quantity').valueChanges.subscribe(data => {
      if (data && data < 1 || data == 0) {
        this.orderForm.get('quantity').setValue(1);
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
  console.log(itemData);
  const itemDetails = itemData.itemName;
  itemData.itemId = itemDetails._id;
  itemData.itemAmount = itemDetails.amount;
  itemData.itemRate = itemDetails.amount * itemDetails.quantity;
  itemData.itemName = itemDetails.item;
  this.orderService.saveOrder(itemData).subscribe(data=>{
    this.orderService.getAllOrder();
  });
}
displayFn(item): string {
  return item && item.itemName ? item.itemName : '';
}
jumpToQuantity() {
  if (this.quantityInput && this.quantityInput.nativeElement) {
    this.quantityInput.nativeElement.focus();
  }
}
}  

