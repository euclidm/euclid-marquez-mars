const body = document.body; // Website Body

const footerElement = document.createElement('footer'); // Footer Element
body.appendChild(footerElement);

const currentDate = new Date(); // Date
const currentYear = currentDate.getFullYear();

const footer = document.querySelector("footer"); // DOM Selection

const copyright = document.createElement('p'); // Copyright
copyright.innerHTML =`@ Euclid Marquez ${currentYear}`;
footer.appendChild(copyright);