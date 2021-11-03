import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { OrderBillComponent } from 'src/app/shared/component/order-bill/order-bill.component';
import { OrderService } from 'src/app/shared/services/order.service';
import { ReportService } from 'src/app/shared/services/report.service';

@Component({
  selector: 'app-order-history',
  templateUrl: './order-history.component.html',
  styleUrls: ['./order-history.component.scss']
})
export class OrderHistoryComponent implements OnInit {
  items = [];
  date;
  dataSource = [];
  displayedColumns = ['position', 'itemname', 'availability', 'addescription', 'amount', 'action', 'stock'];
  interval;
  constructor(private report: ReportService, private order: OrderService,
              private popup: MatDialog, private router: Router) { }

  ngOnInit(): void {
    this.getReport();
    this.interval =  setInterval(() => {
      this.getReport();
    }, 5000);
  }
  
  getReport() {
    if (!this.date) {
      this.date = new Date().toISOString();
    } else {
      this.date = new Date(this.date).toISOString();
    }
    this.report.getBillReport(this.date).subscribe(data => {
      this.dataSource = this.items = data;
    });
  }
  getOrderDetailsByOrderNumber(orderNumber) {
    this.order.getOrdersByOrderNumber(orderNumber).subscribe(data => {
      const billDetails = {
        orderList: data,
        orderNumber,
        total: this.getTotal(data),
        disableAction: true
      }
      this.popup.open(OrderBillComponent, {data: billDetails, width: '300px'});
    });
  }
  getTotal(orderList) {
    let total = 0;
    if (orderList && orderList.length > 0) {
      orderList.forEach(element => {
        total += Number(element.amount);
      });
    }
    return total;
  }
  checkStatus(status) {
    if (status == 'KOT_SENT') {
      return 'info';
    }
    if (status == 'BILL_GENERATED') {
      return 'warning';
    }
    if (status == 'SETTLED') {
      return 'success';
    }
    if (status == 'ORDER_PENDING') {
      return 'order-pending';
    }
  }
  editOrder(orderNumber) {
      this.router.navigate(['/home/order', orderNumber]);
  }
  ngOnDestroy() {
    clearInterval(this.interval);
  }
}
