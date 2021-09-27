import { EventEmitter, Inject, Optional, Output } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
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
  disableActions;
  disableKot;
  fromBillView;
  @Output() action = new EventEmitter(true);
  constructor(private common: CommonService, private order: OrderService, private toaster: ToastrService,
    @Optional() @Inject(MAT_DIALOG_DATA) public data:any,@Optional() private dialog: MatDialogRef<OrderBillComponent>) { 
      if (data) {
        this.orderDetails = data.orderList;
        this.OrderNumber = data.orderNumber;
        this.TotalAmount = data.total;
        this.disableActions = data.disableAction;
        this.disableKot = this.checkKotStatus();
        this.fromBillView = true;
      } else {
        this.fromBillView = false;
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
  checkKotStatus() {
    let printCheck = false;
    this.orderDetails.forEach(element => {
      if (element.printedOrNot) {
        printCheck = true;
      }
    });
    return !printCheck;
  }
  deleteOrder(order) {
    const data = {
      action: 'DELETE',
      order
    }
    this.action.emit(data);
  }
  editOrder(order) {
    const data = {
      action: 'EDIT',
      order
    }
    this.action.emit(data);
  }
  closeOrder() {
    if (!this.fromBillView) {
      const data = {
        action: 'CLOSE'
      }
      this.action.emit(data);
    } else {
      this.dialog.close();
    }    
  }
}
