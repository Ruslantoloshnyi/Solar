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
    greenTariffSlides[gtSliderIndex].style.display = 'none';
    greenTariffSlides[index].style.display = 'block';
    gtSliderIndex = index;
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
greenTariffSliderArrowRight.addEventListener('click', function() {    
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
    clientsSlides[clSliderIndex].style.display = 'none';
    clientsContentsSlider[clSliderIndex].style.display = 'none';
    clientsSlides[index].style.display = 'block';
    clientsContentsSlider[index].style.display = 'block';
    clSliderIndex = index;
};

// Event listener click to left arrow
clientsSliderLeftArrow.addEventListener('click', function() {
    let index = clSliderIndex - 1;
    if (index < 0) {
        index = clientsSlides.length - 1;
    }
    show_cl_slide(index);
});

// Event listener click to right arrow
clientsSliderRightArrow.addEventListener('click', function() {   
    let index = clSliderIndex + 1;
    if (index >= clientsSlides.length) {
        index = 0;
    }
    show_cl_slide(index);
});

show_cl_slide(0);


