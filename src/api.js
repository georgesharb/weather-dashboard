import { API_KEY } from './config.js';
const API_URL = 'https://api.openweathermap.org/data/2.5/weather';

 
export async function getJSON(url) {
  const response = await fetch(url);
 
  if (!response.ok) {
    const error = new Error(`HTTP ${response.status}`);
    error.status = response.status;
    throw error;
  }
 
  return response.json();
}
 
export async function loadWeather(city) {
  const params = new URLSearchParams({
    q: city,
    units: 'metric',
    appid: API_KEY,
  });
 
  return getJSON(`${API_URL}?${params}`);
}