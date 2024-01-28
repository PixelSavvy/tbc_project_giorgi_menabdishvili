export class MobileMenu {
  private hamburger: HTMLElement | null;
  private mobileMenu: HTMLElement | null;
  private backdrop: HTMLDivElement | null;
  private header: HTMLElement | null;
  private lastScrollPosition: number = 0;

  constructor(hamburgerSelector: string, mobileMenuSelector: string) {
    this.hamburger = document.querySelector(hamburgerSelector);
    this.mobileMenu = document.querySelector(mobileMenuSelector);
    this.header = document.querySelector(".header");
    this.backdrop = null;

    this.init();
  }

  public init() {
    this.hamburger?.addEventListener("click", this.toggleMenu.bind(this));
    window.addEventListener("scroll", this.toggleHeaderOnScroll.bind(this));
  }

  private renderBackdrop() {
    if (this.backdrop) return;

    const backdropEl = document.createElement("div");
    backdropEl.classList.add("backdrop");
    document.body.insertBefore(backdropEl, document.body.firstChild);
    this.backdrop = backdropEl;

    this.backdrop.addEventListener("click", this.closeMenu.bind(this));
  }

  private toggleHeaderOnScroll() {
    if (!this.header) return;

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

    if (isClosed) {
      this.openMenu();
    } else {
      this.closeMenu();
    }
  }
}
