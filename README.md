# Weather App

A responsive React-based weather application that provides real-time weather data for any city in the world.

## Features

- 🌍 **City Search**: Search for weather data by city name
- 🌡️ **Real-time Temperature**: Display current temperature and weather conditions
- 📊 **Weather Details**: Shows humidity, wind speed, and pressure
- 🔄 **Auto-refresh**: Updates weather data periodically
- 📱 **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- 🎨 **Beautiful UI**: Clean and intuitive user interface

## Technologies Used

- **Frontend**: React, HTML5, CSS3
- **API**: OpenWeather API
- **State Management**: React Hooks
- **HTTP Client**: Axios

## Installation

1. Clone the repository:
```bash
git clone https://github.com/Ebrahim-Saied/weather-app.git
```

2. Install dependencies:
```bash
npm install
```

3. Get an API key from [OpenWeather](https://openweathermap.org/api)

4. Create a `.env` file and add your API key:
```
REACT_APP_WEATHER_API_KEY=your_api_key_here
```

5. Start the development server:
```bash
npm start
```

## Usage

1. Open the application in your browser
2. Enter a city name in the search bar
3. Click "Search" or press Enter
4. View the current weather and forecast

## Project Structure

```
src/
├── components/
│   ├── SearchBar.js
│   ├── WeatherCard.js
│   └── Forecast.js
├── App.js
├── App.css
└── index.js
```

## API Reference

This project uses the free tier of OpenWeather API, which provides:
- Current weather data
- 5-day forecast
- Weather alerts

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Author

Ibrahim Saied - Full Stack Developer

## Support

If you have any questions or suggestions, please open an issue on GitHub.
