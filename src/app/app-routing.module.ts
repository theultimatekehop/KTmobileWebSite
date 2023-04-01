import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { CommercialComponent } from './pages/commercial/commercial.component';
import { ResidentielleComponent } from './pages/residentielle/residentielle.component';
import { IaComponent } from './pages/ia/ia.component';
import { FaqComponent } from './pages/faq/faq.component';
import { ContactusComponent } from './pages/contactus/contactus.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'commercial', component: CommercialComponent },
  { path: 'residentielle', component: ResidentielleComponent },
  { path: 'ia', component: IaComponent },
  { path: 'faq', component: FaqComponent },
  { path: 'contactus', component: ContactusComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
