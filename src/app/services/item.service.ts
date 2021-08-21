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
    return this.http.get(url);
  }
  saveSection(body){
    const url=environment.apiurl + '/section';
    return this.http.post(url,body);
  }
  getSectionById(id){
    const url=environment.apiurl + '/section/getById/' + id;
    return this.http.get(url);
  }
  deleteSectionById(id){
    const url=environment.apiurl + '/section/ById/' + id;
    return this.http.delete(url);
  }
  getAllItem(){
    const url=environment.apiurl + '/item';
    return this.http.get(url);
  }
  saveItem(body){
    const url=environment.apiurl + '/item';
    return this.http.post(url,body);
  }
  getItemById(id){
    const url=environment.apiurl + '/item/getById/' + id;
    return this.http.get(url);
  }
  deleteItemById(id){
    const url=environment.apiurl + '/item/ById/' + id;
    return this.http.delete(url);  
  }
  getAllCategory(){
    const url=environment.apiurl + '/category';
    return this.http.get(url);
  }
  saveCategory(body){
    const url=environment.apiurl +'/category';
    return this.http.post(url,body);
  }
  getCategoryById(id){
    const url=environment.apiurl + '/category/getById/' + id;
    return this.http.get(url);
  }
  deleteCategoryById(id){
    const url=environment.apiurl + '/category/ById/' + id;
    return this.http.delete(url);
  }
}

