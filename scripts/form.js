// script.js
document.addEventListener('DOMContentLoaded', () => {
    const productSelect = document.getElementById('productName');
    const products = [
        { name: "Product A" },
        { name: "Product B" },
        { name: "Product C" },
        { name: "Product D" }
    ];

    products.forEach(product => {
        const option = document.createElement('option');
        option.value = product.name;
        option.text = product.name;
        productSelect.appendChild(option);
    });

    //Dynamic date for last modification
    const lastModifiedSpan = document.getElementById('lastModified');
    const lastModifiedDate = new Date(document.lastModified);
    const formattedDate = `${(lastModifiedDate.getMonth() + 1).toString().padStart(2, '0')}/${lastModifiedDate.getDate().toString().padStart(2, '0')}/${lastModifiedDate.getFullYear()} ${lastModifiedDate.getHours().toString().padStart(2, '0')}:${lastModifiedDate.getMinutes().toString().padStart(2, '0')}:${lastModifiedDate.getSeconds().toString().padStart(2, '0')}`;
    lastModifiedSpan.textContent = formattedDate;

});