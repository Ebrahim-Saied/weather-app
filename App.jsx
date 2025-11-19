import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

const App = () => {
  const [city, setCity] = useState('London');
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;

  const fetchWeather = async (cityName) => {
    try {
      setLoading(true);
      setError(null);
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${API_KEY}`
      );
      setWeather(response.data);
    } catch (err) {
      setError('City not found. Please try again.');
      setWeather(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchWeather(city);
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    if (city.trim()) {
      fetchWeather(city);
    }
  };

  return (
    <div className="app">
      <div className="container">
        <h1>🌤️ Weather Forecast</h1>
        <form onSubmit={handleSearch} className="search-form">
          <input
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            placeholder="Enter city name..."
            className="search-input"
          />
          <button type="submit" className="search-btn">Search</button>
        </form>

        {loading && <p className="loading">Loading...</p>}
        {error && <p className="error">{error}</p>}

        {weather && (
          <div className="weather-card">
            <h2>{weather.name}, {weather.sys.country}</h2>
            <div className="weather-main">
              <img
                src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@4x.png`}
                alt="weather icon"
                className="weather-icon"
              />
              <div className="temp-section">
                <h3 className="temperature">{Math.round(weather.main.temp)}°C</h3>
                <p className="description">{weather.weather[0].main}</p>
              </div>
            </div>

            <div className="weather-details">
              <div className="detail">
                <span className="label">Feels Like</span>
                <span className="value">{Math.round(weather.main.feels_like)}°C</span>
              </div>
              <div className="detail">
                <span className="label">Humidity</span>
                <span className="value">{weather.main.humidity}%</span>
              </div>
              <div className="detail">
                <span className="label">Wind Speed</span>
                <span className="value">{weather.wind.speed} m/s</span>
              </div>
              <div className="detail">
                <span className="label">Pressure</span>
                <span className="value">{weather.main.pressure} hPa</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
