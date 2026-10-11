import { formatTemp, formatWind, getIconUrl } from './format.js';
 
const statusEl = document.querySelector('#status');
const retryBtn = document.querySelector('#retry-btn');
const searchBtn = document.querySelector('#search-btn');
const weatherEl = document.querySelector('#weather');
 
const cityNameEl = document.querySelector('#city-name');
const descriptionEl = document.querySelector('#description');
const iconEl = document.querySelector('#icon');
const tempEl = document.querySelector('#temp');
const feelsLikeEl = document.querySelector('#feels-like');
const humidityEl = document.querySelector('#humidity');
const windEl = document.querySelector('#wind');
const minMaxEl = document.querySelector('#min-max');
 
// state can be: idle, loading, success, error
export function setStatus(state, message = '') {
  statusEl.dataset.state = state;
  statusEl.textContent = message;
  statusEl.hidden = state === 'success';
 
  searchBtn.disabled = state === 'loading';
  retryBtn.hidden = state !== 'error';
 
  if (state === 'error') {
    weatherEl.hidden = true;
  }
  if (state === 'success') {
    weatherEl.hidden = false;
  }
}
 
export function renderWeather(data) {
  const { name, sys, main, wind, weather } = data;
 
  cityNameEl.textContent = `${name}, ${sys.country}`;
  descriptionEl.textContent = weather[0].description;
  iconEl.src = getIconUrl(weather[0].icon);
  iconEl.alt = weather[0].description;
 
  tempEl.textContent = formatTemp(main.temp);
  feelsLikeEl.textContent = formatTemp(main.feels_like);
  humidityEl.textContent = `${main.humidity}%`;
  windEl.textContent = formatWind(wind.speed);
  minMaxEl.textContent = `${formatTemp(main.temp_min)} / ${formatTemp(main.temp_max)}`;
}
