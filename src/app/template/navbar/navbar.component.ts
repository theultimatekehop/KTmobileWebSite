import { Component } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  currentRoute: string[] = [];

  routeTitles: { [key: string]: { [lang: string]: string, en: string, fr: string } } = {
    '': { en: 'Home', fr: 'Accueil' },
    'ia': { en: 'AI', fr: 'IA' },
    'commercial': { en: 'Commercial', fr: 'Commercial' },
    'residentielle': { en: 'Residiential', fr: 'Résidentielle' },
    'about': { en: 'About', fr: 'À propos' },
    'faq': { en: 'FAQ', fr: 'FAQ' },
    'contactus': { en: 'Contact us', fr: 'Contactez-nous' },
  };
  

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private translate: TranslateService) {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      const route = this.activatedRoute.snapshot;
      const routeSegments = [];

      let currentRoute = route.firstChild;
      while (currentRoute !== null) {
        if (currentRoute.routeConfig && currentRoute.routeConfig.path) {
          routeSegments.push(currentRoute.routeConfig.path);
        }
        currentRoute = currentRoute.firstChild;
      }

      this.currentRoute = routeSegments;
    });
  }

  getRouteTitle(segment: string): string {
    const title = this.routeTitles[segment];
    return title ? title[this.translate.currentLang] : segment;
  }
}
