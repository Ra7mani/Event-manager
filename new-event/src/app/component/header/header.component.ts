import { Component, HostListener, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isScrolled = false;
  activeMenu: string = 'home';
 

  constructor(private router: Router) {}

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

  isPopupVisible = false;  // Variable pour contrôler la visibilité de la popup

  // Méthode pour ouvrir la popup
  openPopup() {
    this.isPopupVisible = true;
  }

  // Méthode pour fermer la popup
  closePopup() {
    this.isPopupVisible = false;
  }
  
}
