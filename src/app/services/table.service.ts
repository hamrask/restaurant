import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TableService {

  constructor(private http:HttpClient) { }

  getAllTable(){
    const url=environment.apiurl + '/table';
    return this.http.get(url);
  }
  saveTable(body){
    const url=environment.apiurl + '/table';
    return this.http.post(url,body);
  }
  getTableById(id){
    const url=environment.apiurl + '/table/getById/' + id;
    return this.http.get(url);
  }
  deleteTableById(id){
    const url=environment.apiurl + '/table/ById/' + id;
    return this.http.delete(url);
  }
}
