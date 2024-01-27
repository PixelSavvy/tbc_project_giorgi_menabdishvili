import { CourseDataType } from "@/types";
const courseList = document.querySelector(".course__list");

export const renderCourseList = (courseData: CourseDataType[]) => {
  courseData.forEach((course) => {
    const courseItem = document.createElement("li");
    courseItem.classList.add("course__item");
    courseItem.innerHTML = `
    <div class="course__item-cover">
      <img
        src=${course.src}
        alt="a man building a mobile app ui on an ipad with an apple pencil"
      />
    </div>

    <div class="course__item-content">
      <h3 class="course__item-heading">${course.title}</h3>
      <p class="course__item-status">რეგისტრაცია დასრულებულია</p>
      <div class="course__item-link">
        <svg
          preserveAspectRatio="xMidYMid meet"
          data-bbox="1.833 2.667 13.334 10.666"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="1.833 2.667 13.334 10.666"
          height="16"
          width="17"
          data-type="color"
          role="presentation"
          aria-hidden="true"
        >
          <g>
            <path
              fill="#00aeef"
              d="m10.3 2.867 4.667 4.666a.645.645 0 0 1 0 .934L10.3 13.133a.644.644 0 0 1-.933 0 .644.644 0 0 1 0-.933L12.9 8.667H2.5c-.4 0-.667-.267-.667-.667s.267-.667.667-.667h10.4L9.367 3.8a.605.605 0 0 1-.2-.467c0-.2.066-.333.2-.466a.644.644 0 0 1 .933 0Z"
              data-color="1"
            ></path>
          </g>
        </svg>
        <a href="https://www.tbcacademy.ge/usaid${course.href}" target="_blank" class="link link--primary">კურსის დეტალები</a>
      </div>
    </div>
    `;
    courseList?.appendChild(courseItem);
  });
};
