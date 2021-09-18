import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  isLoading = new Subject<boolean>();
  constructor(private http: HttpClient) { }

  showLoader(): void {
    this.isLoading.next(true);
  }
  hideLoader(): void {
      this.isLoading.next(false);
  }
  parseJwt(): string {
    const token = sessionStorage.getItem('token');
    if (token) {
      const base64Url = token.split('.')[1];
      const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
      let jsonPayload = decodeURIComponent(atob(base64).split('').map((c) => {
          return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
      }).join(''));
      jsonPayload = JSON.parse(jsonPayload);
      return jsonPayload;
    }
    return null;
  }
  getUserData(): string {
    const userData = this.parseJwt() as any;
    if (userData && userData.userRoleCode) {
        return userData.userRoleCode;
    } else {
      return null;
    }
  }
  getRestaurantProfile() {
    const url = environment.apiurl + '/profile';
    return this.http.get(url);
  }
  saveRestaurantProfile(body) {
    const url = environment.apiurl + '/profile';
    return this.http.post(url, body);
  }
}
