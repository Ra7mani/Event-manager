
import { Component, HostListener, OnInit } from '@angular/core';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isScrolled = false;

  ngOnInit() {
    
    this.onScroll();
  }
  @HostListener('window:scroll', [])
  onScroll(): void {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    this.isScrolled = scrollTop > 0; 
  }
  activeMenu: string = 'home'; 
  
  setActive(menuItem: string) {
    this.activeMenu = menuItem; 
  }

}
