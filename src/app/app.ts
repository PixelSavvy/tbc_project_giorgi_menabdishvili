import {
  mobileMenuInstance,
  accordionInstance,
  carouselInstance,
} from "@/app/components";

import { renderCourseCards, renderSlides } from "@/helpers";

import { carouselData, courseData } from "@/data";

const app = () => {
  mobileMenuInstance.init();
  carouselInstance.init();
  accordionInstance.init();

  renderSlides(carouselData);
  renderCourseCards(courseData);
};

document.addEventListener("DOMContentLoaded", app);
