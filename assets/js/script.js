"use strict"

const showFormButton = document.querySelector('.header-show-form__button');
const headerConsultationForm = document.querySelector('.header-consultation-form');
const headerSuccessfully = document.querySelector('.header-consultation_successfully');
const headerConsultationFormButton = document.querySelector('.header-consultation-form__button');

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