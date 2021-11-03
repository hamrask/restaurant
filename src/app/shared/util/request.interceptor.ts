import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { CommonService } from '../services/common.service';
import { UserManagementService } from '../services/user-management.service';

@Injectable()
export class RequestInterceptor implements HttpInterceptor {

  constructor(private loaderService: CommonService, private auth: UserManagementService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (!req.url.includes('getBillReport')) {
      this.loaderService.showLoader();
    }
    const token = this.auth.getAuthToken();
    if (token) {
      req = req.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`
        }
      });
    }
    return next.handle(req).pipe(
        finalize(() => this.loaderService.hideLoader())
    );
}
}
