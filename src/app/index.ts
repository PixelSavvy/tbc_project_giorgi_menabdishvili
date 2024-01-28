import { MobileMenu } from "./navigation/index";
import { Carousel } from "./carousel/Index";
import { Accordion } from "./accordion";

import { renderCourseList } from "./courses/courseItem";
import { renderSlides } from "./carousel/renderSlides";

import { carouselData } from "@/data/carouselData";
import { courseData } from "@/data";

const init = () => {
  const mobileMenuInstance: MobileMenu = new MobileMenu(
    ".hamburger",
    ".navigation",
  );
  const carouselInstance = new Carousel();
  const accordionInstance = new Accordion(
    ".accordion__trigger",
    ".accordion__content",
  );
  renderSlides(carouselData);
  renderCourseList(courseData);
};

document.addEventListener("DOMContentLoaded", init);
