"use strict"

const greenTariffSlider = document.querySelector('.green-tariff-content-slider__text');
const greenTariffSlides = greenTariffSlider.querySelectorAll('p');
const greenTariffSliderArrowLeft = greenTariffSlider.querySelector('.arrow_left-pointer');
const greenTariffSliderArrowRight = greenTariffSlider.querySelector('.arrow_right-pointer');

let gtSliderIndex = 0;

function show_slide(index) {
    greenTariffSlides[gtSliderIndex].style.display = 'none';
    greenTariffSlides[index].style.display = 'block';
    gtSliderIndex = index;
};

greenTariffSliderArrowLeft.addEventListener('click', function () {    
    let index = gtSliderIndex - 1;
    if (index < 0) {
        index = greenTariffSlides.length - 1;
    }

    show_slide(index);
});

greenTariffSliderArrowRight.addEventListener('click', function() {    
    let index = gtSliderIndex + 1;
    if (index >= greenTariffSlides.length) {
        index = 0;
    }

    show_slide(index);
});

show_slide(0);

