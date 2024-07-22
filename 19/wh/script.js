// script.js
document.getElementById('get-weather-btn').addEventListener('click', getWeather);

function getWeather() {
  const city = document.getElementById('city-input').value;
  const apiKey = 'YOUR_API_KEY_HERE';
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  fetch(url)
    .then(response => response.json())
    .then(data => {
      if (data.cod === 200) {
        const weatherInfo = `
          <h2>${data.name}</h2>
          <p>${data.weather[0].description}</p>
          <p>Temperature: ${data.main.temp}°C</p>
          <p>Humidity: ${data.main.humidity}%</p>
          <p>Wind Speed: ${data.wind.speed} m/s</p>
        `;
        document.getElementById('weather-info').innerHTML = weatherInfo;
      } else {
        document.getElementById('weather-info').innerHTML = `<p>${data.message}</p>`;
      }
    })
    .catch(error => {
      console.error('Error fetching weather data:', error);
      document.getElementById('weather-info').innerHTML = `<p>Could not fetch weather data.</p>`;
    });
}
