// Website Body
const body = document.body;

// Footer
const footer = document.querySelector('footer');

// Date
const currentDate = new Date();
const currentYear = currentDate.getFullYear;

// Copyright
const copyright = document.createElement('p');
copyright.innerHTML =`@ Euclid Marquez ${currentYear}`;

footer.appendChild(copyright);