"use strict"

const showFormButton = document.querySelector('.header-show-form__button');
const headerConsultationForm = document.querySelector('.header-consultation-form');
const headerSuccessfully = document.querySelector('.header-consultation_successfully');
const headerConsultationFormButton = document.querySelector('.header-consultation-form__button');
const greenTariffLink = document.querySelector('.green-tariff__link');
const greenTariffContentBlocks = document.querySelectorAll('.green-tariff-content-block');
const clientsContentShowFormButton = document.querySelector('.clients-content-show-form__button');
const clientsContentForm = document.querySelector('.clients-content-consultation-form');
const clientsConsultationFormButton =document.querySelector('.clients-content-consultation-form__button');
const clientsContentSuccessfully = document.querySelector('.clients-content_successfully');

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

// Show consultation form function
function show_form (button, form) {
    button.addEventListener('click', function() {
        if (form.style.display == 'none') {
            form.style.display = 'flex';
        } else {
            form.style.display = 'none'
        }
    })
};

// Hide consultation form and show consultation successfully on click function
function consultation_successfully(button, form, successfully) {
    button.addEventListener('click', function() {
        form.style.display = 'none';
        successfully.style.display = 'block';

        setTimeout(function () {
            successfully.style.display = 'none';
        }, 10000)
    })
};

let firstChild = greenTariffLink.children;
firstChild[0].classList.add('underline');

green_tariff_decoration();
show_form(showFormButton, headerConsultationForm);
show_form(clientsContentShowFormButton, clientsContentForm);
consultation_successfully(headerConsultationFormButton, headerConsultationForm, headerSuccessfully);
consultation_successfully(clientsConsultationFormButton, clientsContentForm, clientsContentSuccessfully);
