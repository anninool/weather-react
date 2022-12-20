import React from "react";
import "./App.css";
import "./index.css";

export default function Weather() {
  let weatherData = {
    city: "London",
    date: "Sunday 13:00",
    temperature: 19,
    description: "Cloudy",
    imgUrl: "https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png",
    humidity: 80,
    wind: 10,
  };

  return (
    <div className="Weather">
      <div class="weather-app-wrapper">
        <div className="card-app">
          <form class="row-app" id="search-form">
            <input
              type="search"
              placeholder="Enter a city"
              autofocus="on"
              autoComplete="off"
              class="enter col-6"
            />
            <input
              type="submit"
              value="Search"
              class="search col-2 btn btn-secondary"
            />
          </form>
          <div className="container">
            <div className="row">
              <div className="col-sm-6">
                <div className="card-1">
                  <div className="card-body">
                    <div className="weather-forecast">
                      <div className="weather-forecast-icon">🌧</div>
                      <div className="weather-forecast-day">
                        Mon <br />
                        <span className="forecast-temperature-max">9°</span>
                        <span className="forecast-temperature-min">8°</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-sm-6">
                <div className="card-2">
                  <div className="card-body-2">
                    <h1 className="card-title">Today</h1>
                    <ul>
                      <li>{weatherData.date}</li>
                    </ul>
                    <img
                      src={weatherData.imgUrl}
                      alt={weatherData.description}
                      className="float"
                    />
                    <h3 className="card-city">{weatherData.city}</h3>
                    <span className="card-temp">{weatherData.temperature}</span>
                    <span className="units">°C</span>
                    <h4 className="card-description">
                      {weatherData.description}
                    </h4>
                    <ul className="card-text">
                      <li>Humidity: {weatherData.humidity}%</li>
                      <li>Wind: {weatherData.wind}m/s</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <p className="weather-link">
          <a href="https://github.com/anninool/weather-application">
            Open-source code
          </a>
          by Anni Nool
        </p>
      </div>
    </div>
  );
}
