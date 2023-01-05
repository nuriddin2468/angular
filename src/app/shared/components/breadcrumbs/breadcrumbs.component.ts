import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

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
      filter(event => event instanceof NavigationEnd)
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
