const year = document.getElementById("currentyear");
year.textContent = new Date().getFullYear();

const lastModified = document.getElementById("date");
lastModified.textContent = `Last modified: ${document.lastModified}`

// Utility function to calculate wind chill
function calculateWindChill(temp, windSpeed) {
    if (temp <= 10 && windSpeed > 4.8) {
      return (
        13.12 + 0.6215 * temp - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temp * Math.pow(windSpeed, 0.16)
      ).toFixed(1);
    } else {
      return "N/A";
    }
  }
  
  // Set last modified date in the footer
  document.getElementById("last-modified").textContent = document.lastModified;
  
  // Static weather values
  const temperature = 27; // in °C
  const windSpeed = 10; // in km/h
  
  // Display wind chill
  const windChill = calculateWindChill(temperature, windSpeed);
  document.getElementById("wind-chill").textContent = windChill;