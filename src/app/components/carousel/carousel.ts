export class Carousel {
  // Define the types
  private control__next: HTMLElement | null;
  private control__prev: HTMLElement | null;

  private wrapper: HTMLElement | null;
  private navigation: HTMLElement | null;

  private initialState: {
    activeIndex: number;
    touchStartX: number;
    touchEndX: number;
  };

  private interval: number;

  private items: NodeListOf<HTMLElement> | undefined;
  private length: number | undefined;

  constructor() {
    // Get the elements
    this.control__next = document.querySelector(".carousel__control--next");
    this.control__prev = document.querySelector(".carousel__control--prev");

    this.wrapper = document.querySelector(".carousel__wrapper");
    this.navigation = document.querySelector(".carousel__navigation");

    this.interval = 5000;

    // Initial State
    this.initialState = {
      activeIndex: 0,
      touchStartX: 0,
      touchEndX: 0,
    };
  }

  public init() {
    if (!this.control__next || !this.control__prev) return;

    window.addEventListener("DOMContentLoaded", () => {
      this.items = document.querySelectorAll(".carousel__item");
      this.length = this.items?.length || 0;
      this.renderControls();
      this.autoPlaySlide();
    });

    // Prev and Next button events
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

  // Auto play slide
  private autoPlaySlide() {
    setInterval(() => {
      this.nextSlide();
    }, this.interval);
  }

  // Next Slide handler
  private nextSlide() {
    if (!this.items || this.length === undefined || this.length === 0) return;
    this.initialState.activeIndex =
      (this.initialState.activeIndex + 1) % this.length;
    this.renderSlide();
  }

  // Prev Slide handler
  private prevSlide() {
    if (!this.items || this.length === undefined || this.length === 0) return;
    this.initialState.activeIndex =
      (this.initialState.activeIndex - 1 + this.length) % this.length;
    this.renderSlide();
  }

  // Move the wrapper to the slide
  private renderSlide() {
    if (!this.wrapper) return;
    this.wrapper.style.transform = `translateX(-${this.initialState.activeIndex * 100}%)`;
    this.setActiveStyles();
  }

  // Slide transition styles
  private setActiveStyles() {
    if (!this.items || this.length === undefined || this.length === 0) return;

    this.items.forEach((item) => {
      item.classList.remove("carousel__item--active");
      const id: number = +item.getAttribute("data-index")!;

      if (id === this.initialState.activeIndex)
        item.classList.add("carousel__item--active");
      if (id !== this.initialState.activeIndex)
        item.classList.remove("carousel__item--active");
    });
  }

  private moveToSlide(carouselNavigatonItem: HTMLButtonElement, index: number) {
    carouselNavigatonItem.addEventListener("click", () => {
      this.initialState.activeIndex = index;
      this.renderSlide();
    });
  }

  // Render the navigation controls
  private renderControls() {
    if (!this.items || this.length === undefined || this.length === 0) return;

    this.items.forEach((_, index) => {
      const carouselNavigatonItem = document.createElement("button");
      carouselNavigatonItem.classList.add("carousel__navigation-item");

      this.moveToSlide(carouselNavigatonItem, index);

      this.navigation?.appendChild(carouselNavigatonItem);
    });
  }

  // Mobile touch events
  private handleTouchStart(event: TouchEvent) {
    this.initialState.touchStartX = event.touches[0].clientX;
  }

  private handleTouchMove(event: TouchEvent) {
    this.initialState.touchEndX = event.touches[0].clientX;
  }

  private handleTouchEnd() {
    const deltaX = this.initialState.touchEndX - this.initialState.touchStartX;

    // Get directions
    Math.abs(deltaX) > 50 && deltaX > 0 ? this.prevSlide() : this.nextSlide();
  }
}

export const carouselInstance = new Carousel();
