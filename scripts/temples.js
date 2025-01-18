const year = document.getElementById("currentyear");
year.textContent = new Date().getFullYear();

const lastModified = document.getElementById("date");
lastModified.textContent = `Last modified: ${document.lastModified}`



const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');
const pageTitle = document.querySelector('#page-title');

hamButton.addEventListener('click', () => {
    const isOpen = navigation.classList.toggle('open');
    hamButton.classList.toggle('open');
    hamButton.setAttribute('aria-label', isOpen ? 'Close Menu' : 'Open Menu');
    pageTitle.style.display = isOpen ? 'none' : 'block';
});