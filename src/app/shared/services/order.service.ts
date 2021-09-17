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
  printOrderByOrderNumber(orderNumber) {
    const url = environment.apiurl + '/order/printOrder/'+ orderNumber;
    return this.http.put(url, {});
  }
}

