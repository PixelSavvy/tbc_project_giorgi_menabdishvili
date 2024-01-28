import { courseData } from "@/data";
import { renderCourseList } from "./courses/courseItem";
import { mobileMenuInstance } from "./navigation";
import { accordionInstance } from "./accordion";

const init = () => {
  mobileMenuInstance;
  accordionInstance;
  renderCourseList(courseData);
};

document.addEventListener("DOMContentLoaded", init);
