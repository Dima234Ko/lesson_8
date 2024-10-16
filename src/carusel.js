export class Carousel {
  constructor(element, interval = 3000) {
    this.carouselElement = element;
    this.slides = this.carouselElement.querySelectorAll(".carousel-item");
    this.currentIndex = 0;
    this.interval = interval;

    this.init();
  }

  init() {
    this.showSlide(this.currentIndex);
    this.setupControls();
    this.startAutoSlide();
  }

  showSlide(index) {
    this.slides.forEach((slide, i) => {
      slide.classList.remove("active");
      if (i === index) {
        slide.classList.add("active");
      }
    });
  }

  next() {
    this.currentIndex = (this.currentIndex + 1) % this.slides.length;
    this.showSlide(this.currentIndex);
  }

  prev() {
    this.currentIndex =
      (this.currentIndex - 1 + this.slides.length) % this.slides.length;
    this.showSlide(this.currentIndex);
  }

  setupControls() {
    const prevButton = this.carouselElement.querySelector(
      ".carousel-control-prev",
    );
    const nextButton = this.carouselElement.querySelector(
      ".carousel-control-next",
    );

    prevButton.addEventListener("click", () => {
      this.prev();
      this.resetAutoSlide();
    });

    nextButton.addEventListener("click", () => {
      this.next();
      this.resetAutoSlide();
    });
  }

  startAutoSlide() {
    this.intervalId = setInterval(() => {
      this.next();
    }, this.interval);
  }

  resetAutoSlide() {
    clearInterval(this.intervalId);
  }
}
