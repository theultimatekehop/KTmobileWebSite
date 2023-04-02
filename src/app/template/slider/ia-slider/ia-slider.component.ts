import { Component } from '@angular/core';

@Component({
  selector: 'app-ia-slider',
  templateUrl: './ia-slider.component.html',
  styleUrls: ['./ia-slider.component.scss']
})
export class IaSliderComponent {
  services = [
    {
      name: 'Solution IA personalisé par Kehop Technologie ',
      description: 'Implémentation personnalisée d\'IA pour le Québec. Notre service d\'IA est personnalisé les besoins des Québécois.',
      link: '/intelligence-artificielle',
      img: 'assets/services/chatgpt.jpg',
    },
     {
      name: 'Optimisation de production',
      description: 'Optimisez votre production grâce aux IA et autres outils technologique moderne. Accélérer votre entreprise grâce à l\'IA.',
      link: '/intelligence-artificielle',
      img: 'assets/services/productivity.jpg',
    },
    {
      name: 'Analyse de donnée',
      description: 'Exploitez le potentiel de vos données pour prendre des décisions éclairées et augmenter la performance de votre entreprise',
      link: '/intelligence-artificielle',
      img: 'assets/services/data-analysis.jpg',
    },
   
    {
      name: 'Marketing personalisé',
      description: 'Améliorez vos campagnes marketing en utilisant des techniques d\'intelligence artificielle pour personnaliser l\'expérience client.',
      link: '/intelligence-artificielle',
      img: 'assets/services/marketing.png',
    },
    {
      name: 'Autre',
      description: 'Découvrez d\'autres solutions d\'intelligence artificielle adaptées à vos besoins spécifiques.',
      link: '/intelligence-artificielle',
      img: 'assets/services/autre.png',
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

