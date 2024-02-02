
import './App.css';
import Sea from './Components/Search/search';
import Forecast from './Components/forecast/forecast';
import CurrentWeather from './Components/current-weather/current-weather';
import { WEATHER_API_KEY, WEATHER_API_URL } from './api';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet';


function App() {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState(null);

  const handleOnSearchChange = (searchData) => {
    const [lat, lon] = searchData.value.split(" ");

    const currentWeatherFetch = fetch(
      `${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}`
    );

    const forecastFetch = fetch(
      `${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}`
    );

    Promise.all([currentWeatherFetch, forecastFetch])
      .then(async (response) => {
        const weatherResponse = await response[0].json();
        const forcastResponse = await response[1].json();

        setCurrentWeather({ city: searchData.label, ...weatherResponse })
        setForecast({ city: searchData.label, ...forcastResponse })
      })
      .catch(console.log);

  }
  return (

    <div className='container'>
      <Helmet>
        <style>{'body { background-color: #FFFC9B; }'}</style>
      </Helmet>
      <Sea onSearchChange={handleOnSearchChange} />
      {currentWeather && <CurrentWeather data={currentWeather} />}
      {forecast && <Forecast data={forecast} />}
    </div>
  );
}

export default App;
