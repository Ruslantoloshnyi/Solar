"use strict"

const greenTariffSlider = document.querySelector('.green-tariff-content-slider__text');
const greenTariffSlides = greenTariffSlider.querySelectorAll('p');
const greenTariffSliderArrowLeft = greenTariffSlider.querySelector('.arrow_left-pointer');
const greenTariffSliderArrowRight = greenTariffSlider.querySelector('.arrow_right-pointer');

/**
 * Green tariff slider
 */

//Calculate initial index
let gtSliderIndex = 0;

//Slide show function
function show_gt_slide(index) {
    greenTariffSlides[gtSliderIndex].style.opacity = '0';
    setTimeout(() => {
        greenTariffSlides[gtSliderIndex].style.display = 'none';
        gtSliderIndex = index;
        greenTariffSlides[index].style.display = 'block';
    
        setTimeout(() => {
          greenTariffSlides[index].style.opacity = '1';
        }, 50);
      }, 100);
};

//add click event listener to lef arrow
greenTariffSliderArrowLeft.addEventListener('click', function () {
    let index = gtSliderIndex - 1;
    if (index < 0) {
        index = greenTariffSlides.length - 1;
    }

    show_gt_slide(index);
});

//add click event listener to right arrow
greenTariffSliderArrowRight.addEventListener('click', function () {
    let index = gtSliderIndex + 1;
    if (index >= greenTariffSlides.length) {
        index = 0;
    }

    show_gt_slide(index);
});

show_gt_slide(0);

/**
 * Our clients slider
 */
const clientsSlider = document.querySelector('.clietns-slider');
const clientsSlides = document.querySelectorAll('.clients-slide');
const clientsSliderRightArrow = clientsSlider.querySelector('.arrow_right-pointer');
const clientsSliderLeftArrow = clientsSlider.querySelector('.arrow_left-pointer');
const clientsContentsSlider = document.querySelectorAll('.clients-content-slider');

// Initial index
let clSliderIndex = 0;


// Show clients slider function
function show_cl_slide(index) {
    clientsSlides[clSliderIndex].style.transition = 'opacity 0.3s ease-out';
    clientsSlides[clSliderIndex].style.opacity = '0';
    clientsContentsSlider[clSliderIndex].style.transition = 'opacity 0.3s ease-out';
    clientsContentsSlider[clSliderIndex].style.opacity = '0';

  setTimeout(() => {
    clientsSlides[clSliderIndex].style.display = 'none';
    clientsContentsSlider[clSliderIndex].style.display = 'none';
    clientsSlides[index].style.display = 'block';
    clientsSlides[index].style.transition = 'opacity 0.3s ease-in';
    clientsSlides[index].style.opacity = '1';
    clientsContentsSlider[index].style.display = 'block';
    clientsContentsSlider[index].style.transition = 'opacity 0.3s ease-in';
    clientsContentsSlider[index].style.opacity = '1';

    clSliderIndex = index;
  }, 300);
};

// Event listener click to left arrow
clientsSliderLeftArrow.addEventListener('click', function () {
    let index = clSliderIndex - 1;
    if (index < 0) {
        index = clientsSlides.length - 1;
    }
    show_cl_slide(index);
});

// Event listener click to right arrow
clientsSliderRightArrow.addEventListener('click', function () {
    let index = clSliderIndex + 1;
    if (index >= clientsSlides.length) {
        index = 0;
    }
    show_cl_slide(index);
});

show_cl_slide(0);


