const year = document.getElementById("currentyear");
year.textContent = new Date().getFullYear();

const lastModified = document.getElementById("date");
lastModified.textContent = `Last modified: ${document.lastModified}`



const navigation = document.querySelector('.navigation');
const hamButton = document.querySelector('#menu');

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
});