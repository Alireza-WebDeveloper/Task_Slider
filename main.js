// !! Carousel
const dataCarousel = [
  {
    src: "/public/img/1.jpeg",
    name: "lorem ipsum 1",
    price: "250$",
  },
  {
    src: "/public/img/2.jpg",
    name: "lorem ipsum 2",
    price: "350$",
  },
  {
    src: "/public/img/3.jpg",
    name: "lorem ipsum 3",
    price: "360$",
  },
];

const carouselItems = document.querySelectorAll(".carousel_Item");
const arrowLeft = document.querySelector(".arrow-left");
const arrowRight = document.querySelector(".arrow-right");

// Function to update the carousel items
const updateCarousel = () => {
  carouselItems.forEach((item, index) => {
    item.innerHTML = `
      <div class='flex flex-column items-center gap-2 p-3'>
        <img src="${dataCarousel[index].src}" class='rounded-md' alt='notfound' />
        <p class='text-center'>${dataCarousel[index].name}</p>
        <span>${dataCarousel[index].price}</span>
        <button class='px-4 py-2 cursor-pointer rounded-2 m-auto bg-secondary-500 text-secondary-100 border-none rounded-md'>
          buy now
        </button>
      </div>
    `;
  });
};

// Initial update
updateCarousel();

// Event listener for left arrow click
arrowLeft.addEventListener("click", () => {
  dataCarousel.unshift(dataCarousel.pop()); // Move the last item to the front
  updateCarousel();
});

// Event listener for right arrow click
arrowRight.addEventListener("click", () => {
  dataCarousel.push(dataCarousel.shift()); // Move the first item to the end
  updateCarousel();
});

// !! Slider

const dataSlider = [
  {
    src: "/public/img/1.jpeg",
    name: "lorem ipsum 1",
    price: "250$",
  },
  {
    src: "/public/img/2.jpg",
    name: "lorem ipsum 2",
    price: "350$",
  },
  {
    src: "/public/img/3.jpg",
    name: "lorem ipsum 3",
    price: "360$",
  },
];

const sliderItems = document.querySelectorAll(".slider_Item");
const sliderArrowLeft = document.querySelector(".slider-arrow-left");
const sliderArrowRight = document.querySelector(".slider-arrow-right");

// Function to update the carousel items
const updateSlider = () => {
  sliderItems.forEach((item, index) => {
    item.innerHTML = `
    <div class="flex flex-column items-center gap-2 p-3">
    <img
      src="${dataSlider[index].src}"
      class="rounded-md"
      alt="notfound"
    />
    <p class="text-center">${dataSlider[index].name}</p>
    <span>${dataSlider[index].price}</span>
    <button
      class="px-4 py-2 cursor-pointer bg-secondary-500 text-secondary-100 border-none rounded-md"
    >
      buy now
    </button>
  </div>
    `;
  });
};

// Initial update
updateSlider();

// Event listener for left arrow click
sliderArrowLeft.addEventListener("click", () => {
  dataSlider.unshift(dataSlider.pop()); // Move the last item to the front
  updateSlider();
});

// Event listener for right arrow click
sliderArrowRight.addEventListener("click", () => {
  dataSlider.push(dataSlider.shift()); // Move the first item to the end
  updateSlider();
});
