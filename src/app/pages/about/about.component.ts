import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {

  constructor(private translate: TranslateService) { }

  switchLanguage() {
    const currentLanguage = this.translate.currentLang;
    const oppositeLanguage = currentLanguage === 'en' ? 'fr' : 'en';
    this.translate.use(oppositeLanguage);
  }

  get oppositeLanguage() {
    return this.translate.currentLang === 'en' ? 'fr' : 'en';
  }

}
