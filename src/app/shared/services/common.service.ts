import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  isLoading = new Subject<boolean>();
  constructor() { }

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
  getUserRole(): string {
    const userData = this.parseJwt() as any;
    if (userData && userData.role) {
        return userData.role;
    } else {
      return null;
    }
  }
}
