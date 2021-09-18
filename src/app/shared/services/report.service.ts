import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ReportService {

  constructor(private http: HttpClient) { }

  getReport() {
    const url = environment.apiurl + '/order/getReport';
    return this.http.get<any>(url);
  }
}
