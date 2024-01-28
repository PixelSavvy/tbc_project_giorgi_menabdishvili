export class MobileMenu {
  // Define the types
  private hamburger: HTMLElement | null;
  private mobileMenu: HTMLElement | null;
  private backdrop: HTMLDivElement | null;
  private header: HTMLElement | null;
  private lastScrollPosition: number = 0;

  constructor(hamburgerSelector: string, mobileMenuSelector: string) {
    // Get the elements
    this.hamburger = document.querySelector(hamburgerSelector);
    this.mobileMenu = document.querySelector(mobileMenuSelector);
    this.header = document.querySelector(".header");
    this.backdrop = null;
  }

  // Initialize the class
  public init() {
    this.hamburger?.addEventListener("click", this.toggleMenu.bind(this));
    window.addEventListener("scroll", this.toggleHeaderOnScroll.bind(this));
  }

  // Render the backdrop
  private renderBackdrop() {
    // If the backdrop already exists, return
    if (this.backdrop) return;
    // Create the backdrop element
    const backdropEl = document.createElement("div");
    backdropEl.classList.add("backdrop");
    document.body.insertBefore(backdropEl, document.body.firstChild);
    this.backdrop = backdropEl;

    // Add event listener on click
    this.backdrop.addEventListener("click", this.closeMenu.bind(this));
  }

  // Set sticky style depending on scroll direction
  private toggleHeaderOnScroll() {
    if (!this.header) return;

    // Get the scroll position
    const scrollTopPosition = window.scrollY;
    const isScrollingDown = scrollTopPosition > this.lastScrollPosition;

    this.header?.setAttribute(
      "aria-hidden",
      isScrollingDown ? "true" : "false",
    );

    this.lastScrollPosition = scrollTopPosition;
  }

  private removeBackdrop() {
    if (this.backdrop) {
      this.backdrop.remove();
      this.backdrop = null;
    }
  }

  private openMenu() {
    this.renderBackdrop();
    this.backdrop?.classList.add("backdrop--active");
    this.hamburger?.setAttribute("aria-expanded", "true");
    this.mobileMenu?.setAttribute("aria-hidden", "false");
  }

  private closeMenu() {
    this.removeBackdrop();
    this.hamburger?.setAttribute("aria-expanded", "false");
    this.mobileMenu?.setAttribute("aria-hidden", "true");
  }

  private toggleMenu(e: Event) {
    e.preventDefault();

    const isClosed = this.hamburger?.getAttribute("aria-expanded") === "false";

    if (isClosed) this.openMenu();
    else this.closeMenu();
  }
}

export const mobileMenuInstance: MobileMenu = new MobileMenu(
  ".hamburger",
  ".navigation",
);
