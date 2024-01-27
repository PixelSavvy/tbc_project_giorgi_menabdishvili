import { courseData } from "@/data";
import { renderCourseList } from "./courses/courseItem";

renderCourseList(courseData);

const accordionTriggers = document.querySelectorAll(".accordion__trigger");
const accordionContents = document.querySelectorAll(".accordion__content");

accordionContents.forEach((content) => {
  content.setAttribute("aria-hidden", "true");
});

const toggleAccordion = (e: Event) => {
  const target = e.currentTarget as HTMLElement;
  const content = target.nextElementSibling as HTMLElement;
  const arrow = target.querySelector(".accordion__arrow") as HTMLElement;

  const isClosed = content.getAttribute("aria-hidden") === "true";

  if (isClosed) {
    content.style.maxHeight = content.scrollHeight + "px";
    arrow.style.transform = "rotate(-180deg)";
    target.setAttribute("aria-expanded", "true");
    content.setAttribute("aria-hidden", "false");
  } else {
    content.style.maxHeight = "0";
    arrow.style.transform = "rotate(0deg)";
    target.setAttribute("aria-expanded", "false");
    content.setAttribute("aria-hidden", "true");
  }
};

accordionTriggers.forEach((trigger) => {
  trigger.addEventListener("click", toggleAccordion);
});
