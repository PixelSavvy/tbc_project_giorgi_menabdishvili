import { CarouselDataType } from "@/types";

export const renderSlides = (data: CarouselDataType[]) => {
  const carouselWrapper = document.querySelector(".carousel__wrapper");

  if (!carouselWrapper) return;

  // Split the data into 3 chunks
  const chunkedData = chunkArray(data, 3);

  // Loop through each chunk and create a carousel item
  chunkedData.forEach((chunk, i) => {
    const carouselItem = document.createElement("li");
    carouselItem.classList.add("carousel__item");
    carouselItem.setAttribute("data-index", i.toString());

    // Set the first item to active
    if (i === 0) carouselItem.classList.add("carousel__item--active");

    // Loop through each course and generate the HTML
    chunk.forEach((course) => {
      const slideHTML = generateSlideHTML(course);
      carouselItem.innerHTML += slideHTML;
    });

    // Append the carousel item to the carousel wrapper
    carouselWrapper.appendChild(carouselItem);
  });
};

// Generate the HTML for each slide
const generateSlideHTML = (course: CarouselDataType): string => {
  return `
    <div>
      <img src="${course.src}" alt="${course.alt}" />
    </div>
  `;
};

// Split an array into chunks
const chunkArray = (array: any[], size: number) => {
  const chunkedArray = [];
  for (let i = 0; i < array.length; i += size) {
    chunkedArray.push(array.slice(i, i + size));
  }
  return chunkedArray;
};
