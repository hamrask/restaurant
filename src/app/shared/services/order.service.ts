import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http:HttpClient) {}

  getAllOrder(){
    const url=environment.apiurl + '/order';
    return this.http.get(url);
  }
  saveOrder(body){
    const url=environment.apiurl + '/order';
    return this.http.post(url,body);
  }
  deleteOrder(orderNumber){
    const url=environment.apiurl + '/order/' + orderNumber;
    return this.http.delete(url);
  }
  getOrderById(id){
    const url=environment.apiurl + '/order/getById/' + id;
    return this.http.get(url);
  }
  deleteOrderById(id){
    const url=environment.apiurl + '/order/ById/' + id;
    return this.http.delete(url);
  }
  getOrderNumber() {
    const url = environment.apiurl + '/order/getOrderNumber';
    return this.http.get<any>(url);
  }
  getOrdersByOrderNumber(orderNumber) {
    const url = environment.apiurl + '/order/getOrderByOrderNumber/' + orderNumber;
    return this.http.get<any>(url);
  }
  getRecentOrderList() {
    const url = environment.apiurl + '/order/getRecentOrders';
    return this.http.get<any>(url);
  }
  printOrderByOrderNumber(orderNumber, orderType) {
    const url = environment.apiurl + '/order/printOrder/'+ orderNumber + '/'+ orderType;
    return this.http.put(url, {});
  }
  setOrderCustomer(orderNumber, customerDetails) {
    const url = environment.apiurl + '/order/setCustomer/'+ orderNumber;
    return this.http.put(url, customerDetails);
  }
  getTotalAmount(orderDetails) {
    let total = 0;
    if (orderDetails && orderDetails.length > 0) {
      orderDetails.forEach(element => {
        total += Number(element.amount);
      });
    }
    return total;
  }
  updatePrintStatus(orderNumber) {
    const url = environment.apiurl + '/order/updatePrintStatus/'+ orderNumber;
    return this.http.get(url);
  }
}

