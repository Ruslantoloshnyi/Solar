"use strict"

const showFormButton = document.querySelector('.header-show-form__button');
const headerConsultationForm = document.querySelector('.header-consultation-form');
const headerSuccessfully = document.querySelector('.header-consultation_successfully');
const headerConsultationFormButton = document.querySelector('.header-consultation-form__button');
const greenTariffLink = document.querySelector('.green-tariff__link');
const greenTariffContentBlocks = document.querySelectorAll('.green-tariff-content-block');
const clientsContentShowFormButton = document.querySelector('.clients-content-show-form__button');
const clientsContentForm = document.querySelector('.clients-content-consultation-form');
const clientsConsultationFormButton = document.querySelector('.clients-content-consultation-form__button');
const clientsContentSuccessfully = document.querySelector('.clients-content_successfully');
const footerButton = document.querySelector('.footer-form__fields-button button');
const footerForm = document.querySelector('.footer-form__fields');
const footerSuccessfully = document.querySelector('.footer_successfully');

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
function show_form(button, form) {
    button.addEventListener('click', function () {
        if (form.style.display == 'none') {
            form.style.display = 'flex';
            setTimeout(() => {
                form.style.opacity = '1';
            }, 100);

        } else {
            form.style.display = 'none'
            setTimeout(() => {
                form.style.opacity = '0';
            }, 100);
        }
    })
};

const headerSuccessfullyPhone = document.querySelector('.header-consultation_successfully__phone');
const headerSuccessfullyName = document.querySelector('.header-consultation_successfully__name');
const headerInputName = document.querySelector('.header-consultation-form__input[name="name"]');
const headerInputPhone = document.querySelector('.header-consultation-form__input[name="phone"]');

// add check and animation into header form
function headerForm() {
    headerConsultationFormButton.addEventListener('click', function () {
        if (headerInputName.value.trim() === '') { // check input name for empty
            headerSuccessfullyName.style.display = 'block'
            setTimeout(() => {
                headerSuccessfullyName.style.opacity = '1';
            }, 100);
            setTimeout(() => {
                headerSuccessfullyName.style.opacity = '0';
            }, 3000);

        } else if (headerInputPhone.value.trim() === '') { // check input phone for empty
            headerSuccessfullyPhone.style.display = 'block'
            setTimeout(() => {
                headerSuccessfullyPhone.style.opacity = '1';
            }, 100);
            setTimeout(() => {
                headerSuccessfullyPhone.style.opacity = '0';
            }, 3000);
        } else {
            headerConsultationForm.style.display = 'none';
            headerSuccessfully.style.display = 'block';
            setTimeout(() => {
                headerSuccessfully.style.opacity = '1'
            }, 100);

            setTimeout(function () {
                headerSuccessfully.style.opacity = '0';
            }, 10000)
        }
    })
};
headerForm();

const clientsSuccessfullyName = document.querySelector('.clients-content_successfully__name');
const clientsSuccessfullyPhone = document.querySelector('.clients-content_successfully__phone');
const clientsInputName = document.querySelector('.clients-content-consultation-form__input[name="name"]');
const clientsInputPhone = document.querySelector('.clients-content-consultation-form__input[name="phone"]');

// add check and animation into clients form
function clientsForm () {
    clientsConsultationFormButton.addEventListener('click', function () {
        if (clientsInputName.value.trim() === '') { // check input name for empty
            clientsSuccessfullyName.style.display = 'block'
            setTimeout(() => {
                clientsSuccessfullyName.style.opacity = '1';
            }, 100);
            setTimeout(() => {
                clientsSuccessfullyName.style.opacity = '0';
            }, 3000);

        } else if (clientsInputPhone.value.trim() === '') { // check input phone for empty
            clientsSuccessfullyPhone.style.display = 'block'
            setTimeout(() => {
                clientsSuccessfullyPhone.style.opacity = '1';
            }, 100);
            setTimeout(() => {
                clientsSuccessfullyPhone.style.opacity = '0';
            }, 3000);
        } else {
            clientsContentForm.style.display = 'none';
            clientsContentSuccessfully.style.display = 'block';
            setTimeout(() => {
                clientsContentSuccessfully.style.opacity = '1'
            }, 100);

            setTimeout(function () {
                clientsContentSuccessfully.style.opacity = '0';
            }, 10000)
        }
    })
};

clientsForm();

// Hide consultation form and show consultation successfully on click function
function consultation_successfully(button, form, successfully) {
    clientsConsultationFormButton.addEventListener('click', function () {
        if (headerInputName.value.trim() === '') { // check input name for empty
            headerSuccessfullyName.style.display = 'block'
            setTimeout(() => {
                headerSuccessfullyName.style.opacity = '1';
            }, 100);
            setTimeout(() => {
                headerSuccessfullyName.style.opacity = '0';
            }, 3000);

        } else if (headerInputPhone.value.trim() === '') { // check input phone for empty
            headerSuccessfullyPhone.style.display = 'block'
            setTimeout(() => {
                headerSuccessfullyPhone.style.opacity = '1';
            }, 100);
            setTimeout(() => {
                headerSuccessfullyPhone.style.opacity = '0';
            }, 3000);
        } else {
            form.style.display = 'none';
            successfully.style.display = 'block';
            setTimeout(() => {
                successfully.style.opacity = '1'
            }, 100);

            setTimeout(function () {
                successfully.style.opacity = '0';
            }, 10000)
        }
    })
};

// Hide footer form on click function
function footer_hide_form() {
    footerButton.addEventListener('click', function (event) {
        footerForm.style.display = 'none';
        footerSuccessfully.style.display = 'block';
        setTimeout(() => {
            footerSuccessfully.style.opacity = '1';
        }, 100);
        event.preventDefault();
    })
};

let firstChild = greenTariffLink.children;
firstChild[0].classList.add('underline');

green_tariff_decoration();
show_form(showFormButton, headerConsultationForm);
show_form(clientsContentShowFormButton, clientsContentForm);
footer_hide_form();



