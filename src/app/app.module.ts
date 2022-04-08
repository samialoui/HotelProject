import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ServiceComponent } from './components/service/service.component';
import { ContactComponent } from './components/contact/contact.component';
import { BlogComponent } from './components/blog/blog.component';
import { Routes, RouterModule } from '@angular/router';
import { AcceuilComponent } from './components/acceuil/acceuil.component';
const appRoute : Routes = [
  {path: '', component: AcceuilComponent},
  {path: 'acceuil', component: AcceuilComponent},
  {path: 'service', component: ServiceComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'blog', component: BlogComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ServiceComponent,
    ContactComponent,
    BlogComponent,
    AcceuilComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(appRoute)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
