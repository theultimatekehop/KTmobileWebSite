import { Component } from '@angular/core';

@Component({
  selector: 'app-residential-slider',
  templateUrl: './residential-slider.component.html',
  styleUrls: ['./residential-slider.component.scss']
})
export class ResidentialSliderComponent {
  services = [
    
    {
      name: 'Consultation intelligence artificielle',
      description: 'Bénéficiez de notre expertise en intelligence artificielle pour développer des solutions personnalisées.',
      link: '/residentielle',
      img: 'assets/services/ai.png',
    },
    {
      name: 'Solution VR/AR',
      description: 'Sélectionnez les meilleures solutions de réalité virtuelle et augmentée pour votre budget et vos besoins.',
      link: '/residentielle',
      img: 'assets/services/vr2.jpg',
    },
    {
      name: 'Television intelligente',
      description: 'Profitez de notre service de télévision intelligente pour une expérience de divertissement inégalée.',
      link: '/residentielle',
      img: 'assets/services/teleIntel.png',
    },
    {
      name: 'caméra sécurité',
      description: 'Assurez la sécurité de votre domicile avec nos solutions de caméras de sécurité.',
      link: '/residentielle',
      img: 'assets/services/camSecu.png',
    },

    {
      name: 'Domotique générale',
      description: 'Automatisez et contrôlez votre maison avec nos solutions de domotique innovantes.',
      link: '/residentielle',
      img: 'assets/services/domotique.png',
    },

/*     {
      name: 'Création site web',
      description: 'Concevez et développez des sites Web attrayants et performants avec notre équipe d\'experts.',
      link: '/residentielle',
      img: 'assets/services/dev.png',
    },
    {
      name: 'Création application mobile',
      description: 'Créez des applications mobiles intuitives et puissantes pour iOS et Android.',
      link: '/residentielle',
      img: 'assets/services/domotique.png',
    }, */
    
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

