# Weather Dashboard

Assignment 4 — a weather app that shows the current weather for any city using the OpenWeatherMap API.



## Features

- Search for a city
- Shows temperature, description, icon, feels like, humidity, wind and min/max
- Loading message while the request is running
- Error message if the city isn't found or the request fails, with a retry button
- Works on mobile and desktop

## Setup

1. Install [Node.js](https://nodejs.org/)
2. Create a free account on [OpenWeatherMap](https://openweathermap.org/) and copy your API key from https://home.openweathermap.org/api_keys (it can take a couple of hours to activate)
3. src/config.js is in .gitignore so the API key is not uploaded to GitHub.So to replace it there is the config.example.js

   ```
   export const API_KEY = `your_key_here`
   ```
4. Install and run:
   ```
   npm install
   npm run dev
   ```
5. Open http://localhost:5173

## Files

- `index.html` — the page structure
- `src/main.js` — handles the search form
- `src/api.js` — fetch requests to the API
- `src/config.js` — the API key
- `src/render.js` — updates the page
- `src/format.js` — helper functions
- `src/style.css` — styles