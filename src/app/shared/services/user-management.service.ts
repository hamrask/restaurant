import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserManagementService {

  constructor(private http:HttpClient) { }

  getAllUser() {
    const url = environment.apiurl + '/user';
    return this.http.get<any>(url);
  }
  
  deleteUserById(id){
    const url = environment.apiurl + '/user/ById/' + id;
    return this.http.delete<any>(url);
  }

  saveUser(body) {
    const url =environment.apiurl + '/user';
    return this.http.post<any>(url,body);
  }

  getUserById(id) {
    const url =environment.apiurl + '/user/getById/' + id;
    return this.http.get<any>(url);
  }  
  getAllRoles(){
    const url = environment.apiurl + '/role';
    return this.http.get<any>(url);
  }
}
