import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
  constructor(private fb: FormBuilder, private orderService :OrderService, private itemService :ItemService) { }

  ngOnInit(): void {
    this.initForm()
    this.availableItemForOrder();
    
  }

  initForm(){
    this.orderForm=this.fb.group({
      queueNumber:[null, Validators.required],
      tableName:[null,Validators.required],
      itemId: [null, Validators.required],
      itemName:[null, Validators.required],
      rate: [null, Validators.required],
      quantity:[null, Validators.required],
      amount: [null, Validators.required],
      printedOrNot:[null]
    });    
  }
  
availableItemForOrder(){
  this.itemService.getAllAvailableItems().subscribe(data =>{
    this.itemDetails = data;
  });
}  
saveOrder(){
  const itemData = this.orderForm.value;
  const itemDetails = itemData.itemName;
  itemData.itemId = itemDetails._id;
  itemData.itemAmount = itemDetails.amount;
  itemData.itemRate = itemDetails.amount * itemDetails.quantity;
  itemData.itemName = itemDetails.item;
  this.orderService.saveOrder(itemData).subscribe(data=>{
    this.orderService.getAllOrder();
  });
}
}  

