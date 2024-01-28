import { CarouselDataType } from "@/types";

export const renderSlides = (data: CarouselDataType[]) => {
  const carouselWrapper = document.querySelector(".carousel__wrapper");

  if (!carouselWrapper) return;

  const chunkedData = chunkArray(data, 3);

  chunkedData.forEach((chunk, i) => {
    const carouselItem = document.createElement("li");
    carouselItem.classList.add("carousel__item");
    carouselItem.setAttribute("data-index", i.toString());

    if (i === 0) carouselItem.classList.add("carousel__item--active");

    chunk.forEach((course) => {
      const slideHTML = generateSlideHTML(course);
      carouselItem.innerHTML += slideHTML;
    });

    carouselWrapper.appendChild(carouselItem);
  });
};

function generateSlideHTML(course: CarouselDataType): string {
  return `
    <div>
      <img src="${course.src}" alt="${course.alt}" />
    </div>
  `;
}

function chunkArray(array: any[], size: number) {
  const chunkedArray = [];
  for (let i = 0; i < array.length; i += size) {
    chunkedArray.push(array.slice(i, i + size));
  }
  return chunkedArray;
}
