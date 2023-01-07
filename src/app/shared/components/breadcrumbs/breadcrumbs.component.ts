import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

@UntilDestroy()
@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.scss']
})
export class BreadcrumbsComponent implements OnInit {

  breadcrumbs: string[] = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {
  }

  ngOnInit() {
    this.createBreadcrumbs();
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd),
      untilDestroyed(this)
    ).subscribe(() => {
      this.createBreadcrumbs();
    });
  }

  private createBreadcrumbs(): void {
    let activeRoute = this.route;
    const breadcrumbs: string[] = [];
    while (activeRoute) {
      const breadcrumb = activeRoute.snapshot.data['breadcrumb'];
      if (breadcrumb) breadcrumbs.push(breadcrumb);
      activeRoute = activeRoute?.firstChild;
    }
    this.breadcrumbs = breadcrumbs;
  }


}
