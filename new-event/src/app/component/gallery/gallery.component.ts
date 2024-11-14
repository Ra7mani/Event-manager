import { Component } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent {
  activeFilter: string = '*';

  // Fonction pour appliquer le filtre selon le type sélectionné
  filterGallery(type: string) {
    this.activeFilter = type;
  }

  // Fonction pour vérifier si un élément doit être affiché
  isVisible(type: string): boolean {
    return this.activeFilter === '*' || this.activeFilter === type;
  }


}
