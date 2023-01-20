import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {

  private loading = new BehaviorSubject<boolean>(false);

  getLoadingState(): Observable<boolean> {
    return this.loading.asObservable();
  }

  setLoadingState(state: boolean) {
    this.loading.next(state);
  }

}
