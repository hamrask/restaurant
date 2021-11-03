import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http: HttpClient) { }

  saveCustomer(body) {
    const url = environment.apiurl + '/customer';
    return this.http.post(url, body);
  }
  searchCustomer(mobile) {
    const url = environment.apiurl + '/customer/getByMobileNo/' + mobile;
    return this.http.get(url); 
  }
}
