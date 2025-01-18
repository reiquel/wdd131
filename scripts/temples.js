const year = document.getElementById("currentyear");
year.textContent = new Date().getFullYear();

const lastModified = document.getElementById("date");
lastModified.textContent = `Last modified: ${document.lastModified}`



const navigation = document.querySelector('.navigation');
const hamButton = document.querySelector('#menu');
const pageTitle = document.querySelector('#page-title');

hamButton.addEventListener('click', () => {
    navigation.classList.toggle('open');
    hamButton.classList.toggle('open');
    if (navigation.classList.contains('open')) {
        pageTitle.style.display = 'none';
    } else {
        pageTitle.style.display = 'block';
    }
});