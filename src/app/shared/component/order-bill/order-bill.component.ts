import { Inject, Optional } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { CommonService } from '../../services/common.service';
import { OrderService } from '../../services/order.service';

@Component({
  selector: 'app-order-bill',
  templateUrl: './order-bill.component.html',
  styleUrls: ['./order-bill.component.scss']
})
export class OrderBillComponent implements OnInit {
  TotalAmount;
  orderDetails;
  OrderNumber;
  constructor(private common: CommonService, private order: OrderService, private toaster: ToastrService,
    @Optional() @Inject(MAT_DIALOG_DATA) public data:any) { 
      if (data) {
        this.orderDetails = data.orderList;
        this.OrderNumber = data.orderNumber;
        this.TotalAmount = data.total;
      }
    }

  ngOnInit(): void {
  }
  enableSettlement() {
    return this.common.abilityToSettle(this.common.getUserData());
  }
  printBill(orderType) {
    this.order.printOrderByOrderNumber(this.OrderNumber, orderType).subscribe(data => {
      this.toaster.success('Bill Printed Successfully');
    });
  }

}
