import React from 'react';

//Renders the weather for one city.
export default class WeatherizrCity extends React.Component {

  render() {
    return <div className="weatherizr-city">
      <span className="city-name">{this.props.city.name}</span>
      <div className="weather-entries">
        {this.props.city.weather.slice(0, 5).map((entry, index) => {
          console.log(entry);
          return <WeatherEntry data={entry} />
        })}
      </div>
    </div>
  }

}

// "Dumb" component that just renders the icon, description, and time.
function WeatherEntry(props) {
  return <div className="weather-entry">
    <img className="icon" src={ `http://openweathermap.org/img/w/${props.data.weather[0].icon}.png` } />
    <div className="description">{props.data.weather[0].description}</div>
    <div className="time">{props.data.dt_txt}</div>
  </div>;
}