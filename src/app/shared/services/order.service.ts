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
}