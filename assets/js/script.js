"use strict"

const showFormButton = document.querySelector('.header-show-form__button');
const headerConsultationForm = document.querySelector('.header-consultation-form');
const headerSuccessfully = document.querySelector('.header-consultation_successfully');
const headerConsultationFormButton = document.querySelector('.header-consultation-form__button');
const greenTariffLink = document.querySelector('.green-tariff__link');
const greenTariffContentBlocks = document.querySelectorAll('.green-tariff-content-block');

// Select content relative to links on green tariff section
function green_tariff_decoration() {

    for (let elem of greenTariffLink.children) {

        elem.addEventListener('click', function () {
            let linkNum = elem.dataset.linknum;

            for (let value of greenTariffLink.children) {
                value.classList.remove('underline');
            }
            elem.classList.add('underline');

            for (let block of greenTariffContentBlocks) {

                if (block.dataset.linknum == linkNum) {
                    block.style.display = 'block';
                } else {
                    block.style.display = 'none';
                }
            }
        })
    }
};

// Show or hide consultation form on click
showFormButton.addEventListener('click', function () {
    if (headerConsultationForm.style.display == 'none') {
        headerConsultationForm.style.display = 'flex';
    } else {
        headerConsultationForm.style.display = 'none';
    }
});

// Hide consultation form and show header consulation soccessfully on click
headerConsultationFormButton.addEventListener('click', function () {
    headerConsultationForm.style.display = 'none';
    headerSuccessfully.style.display = 'block';

    //Register time out 10 sec
    setTimeout(function () {
        headerSuccessfully.style.display = 'none';
    }, 10000)
});

let firstChild = greenTariffLink.children;
firstChild[0].classList.add('underline');

green_tariff_decoration();