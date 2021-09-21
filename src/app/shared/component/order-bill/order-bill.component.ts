import { Component, OnInit } from '@angular/core';
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
  constructor(private common: CommonService, private order: OrderService, private toaster: ToastrService) { }

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
