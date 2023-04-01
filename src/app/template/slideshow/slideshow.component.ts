import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.scss']
})
export class SlideshowComponent implements OnInit, OnDestroy {

  slides = ['assets/confidentiel.jpg', 'assets/contact-bg.jpg', 'assets/home-bg.jpg'];

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
