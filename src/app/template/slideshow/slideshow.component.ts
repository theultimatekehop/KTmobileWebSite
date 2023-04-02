import { Component, OnInit, OnDestroy } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { Router } from '@angular/router';


@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.scss'],
  animations: [
    trigger('dropDownAnimation', [
      state('void', style({ transform: 'translateY(-100%)' })),
      state('*', style({ transform: 'translateY(0)' })),
      transition('void <=> *', animate('1s ease-in-out')),
    ]),
  ],
})
export class SlideshowComponent implements OnInit, OnDestroy {

  slides = [
    { url: 'assets/home-bg.jpg', text: 'Kehop Technologie', text2: 'Modernisez vous grâces à nos experts', link: 'contactus' },
    { url: 'assets/intelligence-artificielle-bg.jpg', text: 'Intelligence Artificielle', text2: 'Débloquer la puissance de l\'IA', link: '/ia' },
    { url: 'assets/commercial-bg.jpg', text: 'Services Commercial', text2: 'Spécialisé en solution commercial', link: '/commercial' },
    { url: 'assets/residentielle-bg.jpg', text: 'Services Résidentielle', text2: 'Plusieurs services résidentielle', link: '/residential' },
    { url: 'assets/quebec.jpg', text: 'Entreprise local', text2: 'Aux services des Québécois', link: '/faq' },
  ];

  currentSlideIndex = 0;
  slideInterval: any;
  isSlideShowRunning = true;

  constructor(private router: Router) { }

  navigateTo(link: string, event: Event): void {
    console.log('navigateTo' + link);
    console.log('event' + event);
    event.stopImmediatePropagation();  // Add this line
    this.router.navigateByUrl(link);
  }

  ngOnInit(): void {
    this.startSlideShow();
  }

  startSlideShow(): void {
    this.slideInterval = setInterval(() => {
      this.currentSlideIndex = (this.currentSlideIndex + 1) % this.slides.length;
    }, 5000);
    this.isSlideShowRunning = true;
  }

  stopSlideShow(): void {
    clearInterval(this.slideInterval);
    this.isSlideShowRunning = false;
  }

  ngOnDestroy(): void {
    clearInterval(this.slideInterval);
  }

  prevSlide(): void {
    this.stopSlideShow();
    this.currentSlideIndex = (this.currentSlideIndex - 1 + this.slides.length) % this.slides.length;
  }
  
  nextSlide(): void {
    this.stopSlideShow();
    this.currentSlideIndex = (this.currentSlideIndex + 1) % this.slides.length;
  }

  goToSlide(index: number): void {
    clearInterval(this.slideInterval);
    //this.stoppedSlides[this.currentSlideIndex] = true;
    this.currentSlideIndex = index;
    this.isSlideShowRunning = false;
  } 

  getProgressBarAnimation(index: number): string {
    if (index === this.currentSlideIndex && this.isSlideShowRunning) {
      return 'progressBar 5s linear infinite';
    }
    return 'none';
  }
  
}
