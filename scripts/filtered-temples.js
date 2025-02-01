const year = document.getElementById("currentyear");
year.textContent = new Date().getFullYear();

const lastModified = document.getElementById("date");
lastModified.textContent = `Last modified: ${document.lastModified}`;

const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');
const pageTitle = document.querySelector('#page-title');

hamButton.addEventListener('click', () => {
    const isOpen = navigation.classList.toggle('open');
    hamButton.classList.toggle('open');
    hamButton.setAttribute('aria-label', isOpen ? 'Close Menu' : 'Open Menu');
    pageTitle.style.display = isOpen ? 'none' : 'block';
});

const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
        templeName: "Accra Ghana",
        location: "Accra, Ghana",
        dedicated: "2004, January, 11",
        area: 17000,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/accra-ghana/400x225/accra-ghana-temple-detail-249022-2400x1200.jpg"
    },
    {
        templeName: "Oklahoma City Oklahoma",
        location: "Oklahoma City, Oklahoma, United States",
        dedicated: "2000, July, 30",
        area: 11000,
        imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/oklahoma-city-oklahoma-temple/oklahoma-city-oklahoma-temple-3132.jpg"
    },
    {
        templeName: "Montreal Quebec",
        location: "Montreal, Quebec, Canada",
        dedicated: "2000, June, 4",
        area: 11500,
        imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/montreal-quebec-temple/montreal-quebec-temple-4155.jpg"
    }
];

const gallery = document.getElementById('gallery');

function createTempleCard(temple) {
    const figure = document.createElement('figure');
    figure.innerHTML = `
        <img src="${temple.imageUrl}" alt="${temple.templeName}" loading="lazy">
        <figcaption>
            <h3>${temple.templeName}</h3>
            <p>Location: ${temple.location}</p>
            <p>Dedicated: ${temple.dedicated}</p>
            <p>Area: ${temple.area} sq ft</p>
        </figcaption>
    `;
    gallery.appendChild(figure);
}

function displayTemples(filteredTemples) {
    gallery.innerHTML = '';
    filteredTemples.forEach(temple => createTempleCard(temple));
}

function filterTemples(filter) {
    switch (filter) {
        case 'old':
            return temples.filter(temple => new Date(temple.dedicated).getFullYear() < 1900);
        case 'new':
            return temples.filter(temple => new Date(temple.dedicated).getFullYear() > 2000);
        case 'large':
            return temples.filter(temple => temple.area > 90000);
        case 'small':
            return temples.filter(temple => temple.area < 10000);
        default:
            return temples;
    }
}

document.querySelectorAll('.navigation a').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const filter = e.target.getAttribute('data-filter');
        displayTemples(filterTemples(filter));
    });
});

// Display all temples by default
displayTemples(temples);