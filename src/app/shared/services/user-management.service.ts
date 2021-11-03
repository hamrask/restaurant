import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserManagementService {

  constructor(private http:HttpClient, private router: Router) { }

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
   // login
   login(body): Observable<any> {
    const url = environment.apiurl + '/user/auth';
    return this.http.post(url, body);
  }
  // set auth token
  setAuthToken(token): void {
    sessionStorage.setItem('isLoggedIn', 'true');
    sessionStorage.setItem('token', token);
  }
  // logout
  logout(): void {
    sessionStorage.clear();
    this.router.navigate(['/login']);
  }
  // get token
  getAuthToken(): string {
    return sessionStorage.getItem('token');
  }
}
