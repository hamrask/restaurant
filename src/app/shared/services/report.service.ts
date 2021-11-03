import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ReportService {

  constructor(private http: HttpClient) { }

  getReport(date) {
    const url = environment.apiurl + '/order/getReport/' + date;
    return this.http.get<any>(url);
  }
  getBillReport(date) {
    const url = environment.apiurl + '/order/getBillReport/' + date;
    return this.http.get<any>(url);
  }
}
