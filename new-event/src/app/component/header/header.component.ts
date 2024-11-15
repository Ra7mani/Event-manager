import { Component, HostListener, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { AccountService } from 'src/app/services/account.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isScrolled = false;
  activeMenu: string = 'home';
 

  constructor(private router: Router   ,  private service: AccountService,
  ) {}

  ngOnInit() {
    this.onScroll();
    this.setActiveMenuOnRouteChange();
    
    // Abonnement aux changements de route pour mettre à jour le menu actif
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.setActiveMenuOnRouteChange();
      }
    });
  }

  // Gérer le changement de style de l'en-tête lors du défilement
  @HostListener('window:scroll', [])
  onScroll(): void {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    this.isScrolled = scrollTop > 0;
  }

  // Définit le menu actif en fonction de la sélection de l'utilisateur
  setActive(menuItem: string) {
    this.activeMenu = menuItem;
  }

  // Définit le menu actif en fonction de la route actuelle
  private setActiveMenuOnRouteChange() {
    const currentUrl = this.router.url;
    if (currentUrl.includes('details')) {
      this.activeMenu = 'about';
    } else if (currentUrl.includes('service')) {
      this.activeMenu = 'speaker';
    } else if (currentUrl.includes('events')) {
      this.activeMenu = 'events';
    } else if (currentUrl.includes('blogs')) {
      this.activeMenu = 'blogs';
    } else if (currentUrl.includes('gallery')) {
      this.activeMenu = 'gallery';
    } else if (currentUrl.includes('contact')) {
      this.activeMenu = 'contact';
    } else {
      this.activeMenu = 'home';
    }
  }

  verif() {
    return localStorage.getItem('state') === '0';
  }
  logOut() {
    // Retrieve user details from localStorage
    const userString = localStorage.getItem('userconnect');

    if (userString) {
      //this.user = JSON.parse(userString);
      //this.service.logout(this.user.refreshToken);
      console.log('Log out successful');
      localStorage.clear();
      this.router.navigateByUrl('/home');
    }
  }

  
  
}
