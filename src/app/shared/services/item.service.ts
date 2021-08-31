import { HttpClient } from '@angular/common/http';
import { identifierModuleUrl } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor(private http:HttpClient) { }

  getAllSection(){
    const url=environment.apiurl + '/section';
    return this.http.get<any>(url);
  }
  saveSection(body){
    const url=environment.apiurl + '/section';
    return this.http.post<any>(url,body);
  }
  getSectionById(id){
    const url=environment.apiurl + '/section/getById/' + id;
    return this.http.get<any>(url);
  }
  deleteSectionById(id){
    const url=environment.apiurl + '/section/ById/' + id;
    return this.http.delete<any>(url);
  }
  getAllItem(){
    const url=environment.apiurl + '/item';
    return this.http.get<any>(url);
  }
  saveItem(body){
    const url=environment.apiurl + '/item';
    return this.http.post<any>(url,body);
  }
  getItemById(id){
    const url=environment.apiurl + '/item/getById/' + id;
    return this.http.get<any>(url);
  }
  deleteItemById(id){
    const url=environment.apiurl + '/item/ById/' + id;
    return this.http.delete<any>(url);  
  }
  getAllCategory(){
    const url=environment.apiurl + '/category';
    return this.http.get<any>(url);
  }
  saveCategory(body){
    const url=environment.apiurl +'/category';
     return this.http.post<any>(url,body);
  }
  getCategoryById(id){
    const url=environment.apiurl + '/category/getById/' + id;
    return this.http.get<any>(url);
  }
  deleteCategoryById(id){
    const url=environment.apiurl + '/category/ById/' + id;
    return this.http.delete<any>(url);
  }
  getAllPrinters() {
    const url = environment.apiurl + '/print/getAllPrinters';
    return this.http.get<any>(url);
  }
}

