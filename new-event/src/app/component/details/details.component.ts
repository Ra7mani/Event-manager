import { Component } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {


  scrollToSection() {
    const section = document.querySelector('#speaker-section');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }


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
