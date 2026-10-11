import './style.css';
import { loadWeather } from './api.js';
import { renderWeather, setStatus } from './render.js';
import { getErrorMessage } from './format.js';
 
const form = document.querySelector('#search-form');
const input = document.querySelector('#city-input');
const retryBtn = document.querySelector('#retry-btn');
 
let lastCity = '';
 
async function onSearch(city) {
  if (city === '') {
    setStatus('error', 'Please enter a city name.');
    return;
  }
 
  lastCity = city;
  setStatus('loading', `Loading ${city}...`);
 
  try {
    const data = await loadWeather(city);
    renderWeather(data);
    setStatus('success');
  } catch (err) {
    setStatus('error', getErrorMessage(err));
  }
}
 
form.addEventListener('submit', (e) => {
  e.preventDefault();
  onSearch(input.value.trim());
});
 
retryBtn.addEventListener('click', () => {
  onSearch(lastCity);
});