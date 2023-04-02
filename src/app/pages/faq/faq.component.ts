import { Component } from '@angular/core';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss']
})
export class FaqComponent {

  questions: any[] = [
    {
      text: 'Quels sont les coûts associés à vos services?',
      answer: 'Les coûts varient en fonction des services que vous choisissez. Nous offrons des prix compétitifs pour tous nos services et nous nous engageons à fournir des solutions de qualité supérieure à des prix abordables.',
      open: false
    },
    {
      text: 'Quels services offrez-vous aux particuliers et aux entreprises?',
      answer: 'Nous offrons une gamme complète de services en technologie, notamment des consultations, installations et configurations personnalisées pour les équipements électroniques et informatiques, ainsi que des solutions de sécurité pour la maison intelligente.',
      open: false
    },
    {
      text: 'Quel est le processus de consultation pour vos services en technologie?',
      answer: 'Nous commençons par écouter vos besoins et vos préférences, puis nous proposons des solutions adaptées à vos besoins spécifiques. Nous travaillons en étroite collaboration avec vous pour vous assurer que vous obtenez la solution technologique la plus adaptée à votre situation.',
      open: false
    },
    {
      text: 'Offrez-vous des services de maintenance pour les équipements que vous installez?',
      answer: 'Oui, nous offrons des services de maintenance et de support pour tous les équipements que nous installons. Nous sommes là pour vous aider si vous rencontrez des problèmes ou si vous avez besoin d\'aide pour la configuration ou la mise à jour de vos équipements.',
      open: false
    },
   
    {
      text: 'Pouvez-vous installer des équipements informatiques et électroniques à distance?',
      answer: 'Oui, nous pouvons installer des équipements à distance si nécessaire. Nous avons les compétences techniques nécessaires pour vous aider à installer et à configurer vos équipements, peu importe où vous vous trouvez.',
      open: false
    },
    // Add more questions and answers as needed
  ];
  

  constructor() { }

  ngOnInit(): void {
  }

  toggleAnswer(question: any) {
    question.open = !question.open;
  }

}
