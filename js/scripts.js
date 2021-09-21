'use strict';

const form = document.getElementsByTagName('form')[0];
const email = document.getElementById('email');
const error = document.getElementById('error');
const errorSymbol = document.getElementById('error--symbol');

email.addEventListener('input', function (event) {
  if (email.validity.typeMismatch) {
    error.classList.add('active');
    errorSymbol.classList.add('active');
  } else {
    email.setCustomValidity('');
    error.classList.remove('active');
    errorSymbol.classList.remove('active');
  }
});
