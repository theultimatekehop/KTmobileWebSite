import { Component } from '@angular/core';

@Component({
  selector: 'app-commercial-slider',
  templateUrl: './commercial-slider.component.html',
  styleUrls: ['./commercial-slider.component.scss']
})
export class CommercialSliderComponent {
  services = [
    {
      name: 'Nos solutions en intelligence artificielle',
      description: 'Découvrez nos nombreuse solution en intelligence artificielle pour améliorer votre productivité et votre efficacité.',
      link: '/commercial',
      img: 'assets/services/autre.png',
    },
    {
      name: 'KehopGPT',
      description: 'Utilisez notre chatbot personalisé adapté aux entreprise québecoise. KehopGPT est une chabot créer a partir de chatGPT et adapté pour les besoins individuel de votre entreprise.',
      link: '/commercial',
      img: 'assets/services/chatgpt.jpg',
    },
    {

      name: 'Service de consultation en technologie',
      description: 'Consultez nos experts en technologie pour vous aider à choisir la solution la plus adaptée à vos besoins.',
      link: '/commercial',
      img: 'assets/services/consulting.png',
    },
    {
      name: 'Présentation et conférence',
      description: 'Découvrez les dernières avancées technologiques grâce à nos présentations personalisé captivantes et informatives',
      link: '/commercial',
      img: 'assets/services/Presentation_services.jpg',
    },
    {
      name: 'Création site web',
      description: 'Concevez et développez des sites Web attrayants et performants avec notre équipe d\'experts.',
      link: '/commercial',
      img: 'assets/services/dev.png',
    },
    {
      name: 'Création application mobile',
      description: 'Créez des applications mobiles intuitives et puissantes pour iOS et Android.',
      link: '/commercial',
      img: 'assets/commercial/phonedev.jpg',
    },
    {
      name: 'Optimisation de production',
      description: 'Optimisez votre pruductivité en tirant profit plus efficacement des outils technologiques disponibles.',
      link: '/commercial',
      img: 'assets/services/productivity.jpg',
    }, 
    {
      name: 'Marketing personalisé',
      description: 'Améliorez vos campagnes marketing en utilisant des techniques d\'intelligence artificielle pour personnaliser l\'expérience client.',
      link: '/commercial',
      img: 'assets/services/marketing.png',
    },
    {
      name: 'Analyse de donnée',
      description: 'Exploitez le potentiel de vos données pour prendre des décisions éclairées et augmenter la performance de votre entreprise.',
      link: '/commercial',
      img: 'assets/services/data-analysis.jpg',
    },
    {
      name: 'Autre',
      description: 'Découvrez d\'autres solutions commerciales adaptées à vos besoins.',
      link: '/commercial',
      img: 'assets/services/egyptTech.jpg',
    },
    
  ];


  currentServiceIndex = 0;
  visibleServices = 3;
  firstVisibleIndex = 0;

  constructor() {
    window.addEventListener('resize', () => {
      this.updateVisibleServices();
    });
  }
  

  ngOnInit(): void {
    this.updateVisibleServices();
  }
  

  prevService(): void {
    if (this.currentServiceIndex > 0) {
      this.currentServiceIndex--;
    }
  }

  nextService(): void {
    if (this.currentServiceIndex < this.services.length - this.visibleServices) {
      this.currentServiceIndex++;
    }
  }
  

  updateVisibleServices(): void {
    if (window.innerWidth <= 767) {
      this.visibleServices = 1;
    } else {
      this.visibleServices = 3;
    }
  }
  
}

