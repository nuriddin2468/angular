import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { delay, finalize, Observable } from 'rxjs';
import { LoadingService } from '@shared/services/loading.service';

@Injectable()
export class LocalBackendInterceptor implements HttpInterceptor {

  private count = 0;
  constructor(
    private loadingService: LoadingService
  ) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if(request.url.includes('/assets/i18n')) return next.handle(request);
    if (this.count === 0) {
      this.loadingService.setLoadingState(true);
    }
    this.count++;
    return next.handle(request).pipe(
      delay(300),
      finalize(() => {
        this.count--;
        if (this.count === 0) {
          this.loadingService.setLoadingState(false);
        }
      })
    );
  }
}
