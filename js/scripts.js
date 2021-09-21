'use strict';
/**

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

 **/

const form = document.getElementById('form');
const email = document.getElementById('email');

form.addEventListener('submit', e => {
  e.preventDefault();

  checkInputs();
});

function checkInputs() {
  // get the values from the inputs
  const emailValue = email.value.trim();

  if (emailValue === '') {
    setErrorFor(email);
  } else if (!isEmail(emailValue)) {
    setErrorFor(email);
  } else {
    setSuccessFor(email);
  }
}

function setErrorFor(input) {
  const error = document.getElementById('error');
  const errorSymbol = document.getElementById('error--symbol');

  error.classList.add('active');
  errorSymbol.classList.add('active');
}

function setSuccessFor(input) {
  const success = document.getElementById('success');
  const error = document.getElementById('error');
  const errorSymbol = document.getElementById('error--symbol');

  success.classList.add('active');
  error.classList.remove('active');
  errorSymbol.classList.remove('active');
  document.getElementById('email').value = '';
}

function isEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
}
