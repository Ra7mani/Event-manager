import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { LayoutComponent } from './component/layout/layout.component';
import { DetailsComponent } from './component/details/details.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    children: [
      { path: '', component: LayoutComponent },
      { path: 'details', component: DetailsComponent },

      



      
    ],
  }, { path: '', redirectTo: '/home', pathMatch: 'full' }, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
