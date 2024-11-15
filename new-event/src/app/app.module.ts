import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { HomeComponent } from './component/home/home.component';
import { LayoutComponent } from './component/layout/layout.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AboutComponent } from './component/about/about.component';
import { DetailsComponent } from './component/details/details.component';
import { EventsComponent } from './component/events/events.component';
import { EventDetailsComponent } from './component/event-details/event-details.component';
import { BookingComponent } from './component/booking/booking.component';
import { BlogComponent } from './component/blog/blog.component';
import { GalleryComponent } from './component/gallery/gallery.component';
import { ContactComponent } from './component/contact/contact.component';
import { ServiceComponent } from './component/service/service.component';
import { HttpClientModule } from '@angular/common/http';
<<<<<<< HEAD
import { AnnonceurListEventsComponent } from './component/annonceur-list-events/annonceur-list-events.component';
import { EventAnnonceurDetailsComponent } from './component/event-annonceur-details/event-annonceur-details.component';
import { RequestComponent } from './component/request/request.component';
import { AnnonceurListRequestComponent } from './component/annonceur-list-request/annonceur-list-request.component';
=======
import { LoginComponent } from './component/login/login.component';
import { SignupComponent } from './component/signup/signup.component';
>>>>>>> 1dadee00f130b7d2f555d954362f23583b07f448

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    LayoutComponent,
    AboutComponent,
    DetailsComponent,
    EventsComponent,
    EventDetailsComponent,
    BookingComponent,
    BlogComponent,
    GalleryComponent,
    ContactComponent,
    ServiceComponent,
<<<<<<< HEAD
    AnnonceurListEventsComponent,
    EventAnnonceurDetailsComponent,
    RequestComponent,
    AnnonceurListRequestComponent
=======
    LoginComponent,
    SignupComponent
>>>>>>> 1dadee00f130b7d2f555d954362f23583b07f448
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
