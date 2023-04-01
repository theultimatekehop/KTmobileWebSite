import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './template/header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { IaComponent } from './pages/ia/ia.component';
import { CommercialComponent } from './pages/commercial/commercial.component';
import { ResidentielleComponent } from './pages/residentielle/residentielle.component';
import { ContactusComponent } from './pages/contactus/contactus.component';
import { FaqComponent } from './pages/faq/faq.component';

import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { BreadcrumbComponent } from './template/breadcrumb/breadcrumb.component';
import { NavbarComponent } from './template/navbar/navbar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SlideshowComponent } from './template/slideshow/slideshow.component';




export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    AboutComponent,
    IaComponent,
    CommercialComponent,
    ResidentielleComponent,
    ContactusComponent,
    FaqComponent,
    BreadcrumbComponent,
    NavbarComponent,
    SlideshowComponent,
    
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
