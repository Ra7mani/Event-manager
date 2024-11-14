import { Component } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  activeFilter: string = '*';

  // Fonction pour appliquer le filtre selon le type sélectionné
  filterGallery(type: string) {
    this.activeFilter = type;
  }

  // Fonction pour vérifier si un élément doit être affiché
  isVisible(type: string): boolean {
    return this.activeFilter === '*' || this.activeFilter === type;
  }

    // speakers list

  speakers = [
    {
      name: 'Nacir',
      lastName: 'Mahfoudhi',
      image: 'assets/images/speaker/speakes1.png',
      subtitle: 'harmoni staffs',
      experience: 10,
      description: "An expert in the tech industry with over 10 years of experience in developing innovative solutions. Passionate about sharing insights on emerging technologies and trends."
    },
    {
      name: 'Abyr',
      lastName: 'Khemiri',
      image: 'assets/images/speaker/speakes1.png',
      subtitle: 'harmoni staffs',
      experience: 15,
      description: "A seasoned leadership coach with 15 years of experience helping professionals grow in their careers through motivational talks and leadership development."
    },
    {
      name: 'Mohamed',
      lastName: 'Rahmani',
      image: 'assets/images/speaker/speakes1.png',
      subtitle: 'harmoni staffs',
      experience: 10,
      description: 'With over 10 years of experience in digital marketing, specializing in social media strategies and content marketing, Jane helps brands grow their online presence and engage with their audiences effectively.'
    }
  ];

//end speakers list 

//testimonials list 

  testimonials = [
    {
      comment: "Bring people together, or turn your passion into a business. Harmoni gives you everything you need to host your best event yet.",
      name: "Jenni Hernandes",
      position: "Graphic Designer"
    },
    {
      comment: "Harmoni has transformed the way we connect with our clients. It’s simple, elegant, and effective.",
      name: "Michael Freeman",
      position: "Event Manager"
    },
    {
      comment: "I love the seamless experience that Harmoni provides. It's all we need to host memorable events.",
      name: "Samantha Roberts",
      position: "Marketing Specialist"
    }
  
  ];
  // end testimonials list 


  


}
