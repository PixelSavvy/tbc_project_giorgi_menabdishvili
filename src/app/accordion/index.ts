export class Accordion {
  private accordionTriggers: NodeListOf<HTMLElement>;
  private accordionContents: NodeListOf<HTMLElement>;

  constructor(triggerSelector: string, contentSelector: string) {
    this.accordionTriggers = document.querySelectorAll(triggerSelector);
    this.accordionContents = document.querySelectorAll(contentSelector);

    this.init();
  }

  private init() {
    this.accordionContents.forEach((content) => {
      content.setAttribute("aria-hidden", "true");
    });

    this.accordionTriggers.forEach((trigger) => {
      trigger.addEventListener("click", this.toggleAccordion.bind(this));
    });
  }

  private closeAllAccordions() {
    this.accordionContents.forEach((content) => {
      const trigger = content.previousElementSibling as HTMLElement;
      const arrow = trigger.querySelector(".accordion__arrow") as HTMLElement;

      content.style.maxHeight = "0";
      arrow.style.transform = "rotate(0deg)";
      trigger.setAttribute("aria-expanded", "false");
      content.setAttribute("aria-hidden", "true");
    });
  }

  private toggleAccordion(e: Event) {
    const target = e.currentTarget as HTMLElement;
    const content = target.nextElementSibling as HTMLElement;
    const arrow = target.querySelector(".accordion__arrow") as HTMLElement;

    const isClosed = content.getAttribute("aria-hidden") === "true";

    this.closeAllAccordions();

    const openAccordion = () => {
      content.style.maxHeight = content.scrollHeight + "px";
      arrow.style.transform = "rotate(-180deg)";
      target.setAttribute("aria-expanded", "true");
      content.setAttribute("aria-hidden", "false");
    };

    const closeAccordion = () => {
      content.style.maxHeight = "0";
      arrow.style.transform = "rotate(0deg)";
      target.setAttribute("aria-expanded", "false");
      content.setAttribute("aria-hidden", "true");
    };

    if (isClosed) openAccordion();
    if (!isClosed) closeAccordion();
  }
}
