const year = document.getElementById("currentyear");
year.textContent = new Date().getFullYear();




const lastModified = document.getElementById("date");
lastModified.textContent = `Last modified: ${document.lastModified}`