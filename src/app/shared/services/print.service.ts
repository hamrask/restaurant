import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PrintService {

  constructor(private http:HttpClient) { }

  getAllPrint(){
    const url=environment.apiurl + '/print';
    return this.http.get(url);
  }
  savePrint(body){
    const url=environment.apiurl + '/print';
    return this.http.post(url,body);
  }
  getPrintById(id){
    const url=environment.apiurl + '/print/getById/' + id;
    return this.http.get(url);
  }
  deletePrintById(id){
    const url=environment.apiurl + '/print/ById/' + id;
    return this.http.delete(url);
  }
}
