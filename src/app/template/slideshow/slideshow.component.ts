import { Component, OnInit, OnDestroy } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';


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
    { url: 'assets/confidentiel.jpg', text: 'Slide 1' },
    { url: 'assets/contact-bg.jpg', text: 'Slide 2' },
    { url: 'assets/home-bg.jpg', text: 'Slide 3' },
  ];
  

  currentSlideIndex = 0;
  slideInterval: any;
  isSlideShowRunning = true;

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
