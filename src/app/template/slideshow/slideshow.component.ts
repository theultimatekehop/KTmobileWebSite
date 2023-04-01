import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.scss']
})
export class SlideshowComponent implements OnInit {

  slides = ['assets/confidentiel.jpg', 'assets/contact-bg.jpg', 'assets/home-bg.jpg'];

  currentSlideIndex = 0;
  slideInterval: any;

  ngOnInit(): void {
    this.startSlideShow();
  }

  startSlideShow(): void {
    this.slideInterval = setInterval(() => {
      this.currentSlideIndex = (this.currentSlideIndex + 1) % this.slides.length;
    }, 5000);
  }

  ngOnDestroy(): void {
    clearInterval(this.slideInterval);
  }

  prevSlide(): void {
    clearInterval(this.slideInterval); // Stop the slideshow
    this.currentSlideIndex = (this.currentSlideIndex - 1 + this.slides.length) % this.slides.length;
  }

  nextSlide(): void {
    clearInterval(this.slideInterval); // Stop the slideshow
    this.currentSlideIndex = (this.currentSlideIndex + 1) % this.slides.length;
  }

  goToSlide(index: number): void {
    clearInterval(this.slideInterval);
    this.currentSlideIndex = index;
   // this.stopSlideShow(); // Stop the slideshow when a dot is clicked
  }
}
