import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { LayoutComponent } from './component/layout/layout.component';
import { DetailsComponent } from './component/details/details.component';
import { EventsComponent } from './component/events/events.component';
import { EventDetailsComponent } from './component/event-details/event-details.component';
import { BookingComponent } from './component/booking/booking.component';
import { BlogComponent } from './component/blog/blog.component';
import { GalleryComponent } from './component/gallery/gallery.component';
import { ContactComponent } from './component/contact/contact.component';
import { ServiceComponent } from './component/service/service.component';
import { AboutComponent } from './component/about/about.component';

const routes: Routes = [
  {
    path: 'home' , component: HomeComponent,
    children: [
      { path: '', component: LayoutComponent },
      { path: 'details', component: DetailsComponent },
      { 
        path: 'events', component: EventsComponent,
        children: [
          
          
        ],
      },
      { path: 'blogs', component: BlogComponent },
      { path: 'gallery', component: GalleryComponent },
      { path: 'contact', component: ContactComponent },
      { path: 'service', component: ServiceComponent },

      { path: 'event-booking', component: BookingComponent },
      { path: 'event-details', component: EventDetailsComponent },





      



      
    ],
  }, { path: '', redirectTo: '/home', pathMatch: 'full' }, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
