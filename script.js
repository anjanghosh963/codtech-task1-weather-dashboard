document.getElementById('searchBtn').addEventListener('click', () => {
  const city = document.getElementById('cityInput').value.trim();
  if (city) {
    fetchWeather(city);
  }
});

document.getElementById('locationBtn').addEventListener('click', () => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(position => {
      const { latitude, longitude } = position.coords;
      fetchWeatherByLocation(latitude, longitude);
    });
  }
});

function fetchWeather(city) {
  document.getElementById('loading').style.display = 'block';
  document.getElementById('error').textContent = '';
  document.getElementById('weatherGrid').style.display = 'none';
  document.getElementById('forecastContainer').style.display = 'none';

  setTimeout(() => {
    document.getElementById('loading').style.display = 'none';
    displayMockWeather(city);
  }, 1000);
}

function fetchWeatherByLocation(lat, lon) {
  document.getElementById('loading').style.display = 'block';
  document.getElementById('error').textContent = '';
  document.getElementById('weatherGrid').style.display = 'none';
  document.getElementById('forecastContainer').style.display = 'none';

  setTimeout(() => {
    document.getElementById('loading').style.display = 'none';
    displayMockWeather('Your Location');
  }, 1000);
}

function displayMockWeather(city) {
  const weatherGrid = document.getElementById('weatherGrid');
  const forecastGrid = document.getElementById('forecastGrid');

  weatherGrid.innerHTML = `
    <div class="weather-card">
      <h2>${city}</h2>
      <p><strong>Temperature:</strong> 28°C</p>
      <p><strong>Condition:</strong> Partly Cloudy</p>
      <p><strong>Humidity:</strong> 60%</p>
      <p><strong>Wind:</strong> 10 km/h</p>
    </div>
  `;

  forecastGrid.innerHTML = '';
  const mockForecast = [
    { day: 'Mon', temp: '30°C', condition: 'Sunny' },
    { day: 'Tue', temp: '27°C', condition: 'Cloudy' },
    { day: 'Wed', temp: '25°C', condition: 'Rainy' },
    { day: 'Thu', temp: '28°C', condition: 'Sunny' },
    { day: 'Fri', temp: '26°C', condition: 'Windy' }
  ];

  mockForecast.forEach(forecast => {
    forecastGrid.innerHTML += `
      <div class="forecast-card">
        <h4>${forecast.day}</h4>
        <p>${forecast.temp}</p>
        <p>${forecast.condition}</p>
      </div>
    `;
  });

  document.getElementById('weatherGrid').style.display = 'flex';
  document.getElementById('forecastContainer').style.display = 'block';
}
