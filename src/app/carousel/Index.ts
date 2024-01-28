export class Carousel {
  private control__next: HTMLElement | null;
  private control__prev: HTMLElement | null;

  private wrapper: HTMLElement | null;
  private navigation: HTMLElement | null;

  private activeIndex: number;
  private touchStartX: number;
  private touchEndX: number;

  private items: NodeListOf<HTMLElement> | undefined;
  private length: number | undefined;

  constructor() {
    this.control__next = document.querySelector(".carousel__control--next");
    this.control__prev = document.querySelector(".carousel__control--prev");

    this.wrapper = document.querySelector(".carousel__wrapper");
    this.navigation = document.querySelector(".carousel__navigation");

    this.items;
    this.length;

    this.activeIndex = 0;
    this.touchStartX = 0;
    this.touchEndX = 0;

    this.init();
    this.autoPlaySlide();
  }

  private init() {
    if (!this.control__next || !this.control__prev) return;

    window.addEventListener("DOMContentLoaded", () => {
      this.items = document.querySelectorAll(".carousel__item");
      this.length = this.items?.length || 0;
      this.renderControls();
    });

    this.control__next.addEventListener("click", this.nextSlide.bind(this));
    this.control__prev.addEventListener("click", this.prevSlide.bind(this));

    // Touch events
    if (this.wrapper) {
      this.wrapper.addEventListener(
        "touchstart",
        this.handleTouchStart.bind(this),
      );
      this.wrapper.addEventListener(
        "touchmove",
        this.handleTouchMove.bind(this),
      );
      this.wrapper.addEventListener("touchend", this.handleTouchEnd.bind(this));
    }
  }

  private autoPlaySlide() {
    setInterval(() => {
      this.nextSlide();
    }, 5000);
  }

  private nextSlide() {
    if (!this.items || this.length === undefined || this.length === 0) return;
    this.activeIndex = (this.activeIndex + 1) % this.length;
    this.renderSlide();
  }

  private prevSlide() {
    if (!this.items || this.length === undefined || this.length === 0) return;
    this.activeIndex = (this.activeIndex - 1 + this.length) % this.length;
    this.renderSlide();
  }

  private renderSlide() {
    if (!this.wrapper) return;
    this.wrapper.style.transform = `translateX(-${this.activeIndex * 100}%)`;
    this.setActiveStyles();
  }

  private setActiveStyles() {
    if (!this.items || this.length === undefined || this.length === 0) return;

    this.items.forEach((item) => {
      item.classList.remove("carousel__item--active");
      const id: number = +item.getAttribute("data-index")!;

      if (id === this.activeIndex) item.classList.add("carousel__item--active");
      if (id !== this.activeIndex)
        item.classList.remove("carousel__item--active");
    });
  }

  private renderControls() {
    if (!this.items || this.length === undefined || this.length === 0) return;

    this.items.forEach((_, index) => {
      const carouselNavigatonItem = document.createElement("button");
      carouselNavigatonItem.classList.add("carousel__navigation-item");
      carouselNavigatonItem.setAttribute("aria-label", `Slide ${index + 1}`);
      carouselNavigatonItem.setAttribute("aria-current", "false");
      carouselNavigatonItem.setAttribute("aria-controls", "carousel");

      carouselNavigatonItem.addEventListener("click", () => {
        this.activeIndex = index;
        this.renderSlide();
      });

      this.navigation?.appendChild(carouselNavigatonItem);
    });
  }

  private handleTouchStart(event: TouchEvent) {
    this.touchStartX = event.touches[0].clientX;
  }

  private handleTouchMove(event: TouchEvent) {
    this.touchEndX = event.touches[0].clientX;
  }

  private handleTouchEnd() {
    const deltaX = this.touchEndX - this.touchStartX;

    if (Math.abs(deltaX) > 50) {
      if (deltaX > 0) {
        this.prevSlide();
      } else {
        this.nextSlide();
      }
    }
  }
}
