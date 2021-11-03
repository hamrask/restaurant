import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor(private http:HttpClient) { }

  getAllMenu(){
    const url=environment.apiurl + '/menu';
    return this.http.get<any>(url);
  }
  saveMenu(body){
    const url=environment.apiurl + '/menu';
    return this.http.post<any>(url,body);
  }
  getMenuById(id){
    const url=environment.apiurl + '/menu/getById/' + id;
    return this.http.get<any>(url);
  }
  deleteMenuById(id){
    const url=environment.apiurl + '/menu/ById/' + id;
    return this.http.delete<any>(url);
  }
}
