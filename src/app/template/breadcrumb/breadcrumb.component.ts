import { Component } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd, ActivatedRouteSnapshot } from '@angular/router';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
})
export class BreadcrumbComponent {
  breadcrumbs: Array<{ label: string; url: string }> = [];

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    this.router.events
      .pipe(
        filter((event) => event instanceof NavigationEnd),
        map(() => this.activatedRoute),
        map((route) => {
          while (route.firstChild) {
            route = route.firstChild;
          }
          return route;
        })
      )
      .subscribe((route) => {
        this.breadcrumbs = [];
        let currentRoute = route.snapshot;
        while (currentRoute.parent) {
          const urlSegments = currentRoute.pathFromRoot.map((route: ActivatedRouteSnapshot) => route.url.map((segment) => segment.path).join('/')).join('/');
          this.breadcrumbs.push({ label: currentRoute.data['breadcrumb'], url: '/' + urlSegments });
          currentRoute = currentRoute.parent;
        }
      });
  }
}
