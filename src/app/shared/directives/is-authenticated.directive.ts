import { Directive, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';
import { distinctUntilChanged, tap } from 'rxjs';
import { Store } from '@ngrx/store';
import { selectToken } from '@shared/+state/reducers';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { AuthActions } from '@shared/+state/actions';

@UntilDestroy()
@Directive({
  selector: '[appIsAuthenticated]'
})
export class IsAuthenticatedDirective implements OnInit {

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef,
    private store: Store
  ) {
  }

  ngOnInit(): void {
    this.store.select(selectToken).pipe(
      distinctUntilChanged(),
      tap(() => this.store.dispatch(AuthActions.getUserInfo())),
      untilDestroyed(this)
    ).subscribe(isAuthenticated => {
      if (isAuthenticated) {
        this.viewContainer.createEmbeddedView(this.templateRef);
        return;
      }
      this.viewContainer.clear();
    });
  }

}
