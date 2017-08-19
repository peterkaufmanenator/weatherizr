import React from 'react';
import $ from "jquery";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import WeatherizrSearch from "./WeatherizrSearch.jsx";
import WeatherizrCity from "./WeatherizrCity.jsx";

//We use this to make calls to openweathermap.org
const apiKey = 'fa64a852c9a8e9d86a09f999651510f7';

export default class Weatherizr extends React.Component {

  constructor(props) {
    super(props);
    
    //We load the city data from localStorage, if it's present.
    if(localStorage.getItem('city-data')) {
      this.state = JSON.parse(localStorage.getItem('city-data'));
      this.state.cities.forEach((city, index) => {
        $.getJSON(`//api.openweathermap.org/data/2.5/forecast?id=${city.id}&mode=json&appid=${apiKey}&callback=?`, (data) => {

          let cityClone = JSON.parse(JSON.stringify(this.state.cities));
          let weather = data.list;
          cityClone[index].weather = weather;
          this.setState({'cities': cityClone});

        });
      });
    }
    else {
      this.state = {'cities': []};
    }

    this.handleAddCity = this.handleAddCity.bind(this);
    this.handleDeleteCity = this.handleDeleteCity.bind(this);

  }

  saveState() {
    localStorage.setItem('city-data', JSON.stringify(this.state));
  }

  handleAddCity(city) {

    //We first get the weather from the JSON call, then we append the city to the state param.
    $.getJSON(`//api.openweathermap.org/data/2.5/forecast?id=${city.id}&mode=json&appid=${apiKey}&callback=?`, (data) => {
      city.weather = data.list;
      this.setState({'cities': this.state.cities.concat([city])});
      this.saveState();
    });

  }

  handleDeleteCity(index) {
    this.setState({'cities': this.state.cities.slice(0, index).concat(this.state.cities.slice(index+1))});
    this.saveState();
  }

  render() {

    return <MuiThemeProvider>
      <div className="app">
        <h1>Weatherizr</h1>
        <h3>Start typing to select a city to follow the weather of....</h3>
        <WeatherizrSearch onAddCity={this.handleAddCity}></WeatherizrSearch>
        {this.state.cities.map((city, index) => {
          return <WeatherizrCity onDeleteCity={this.handleDeleteCity} index={index} city={city} key={index}></WeatherizrCity>;
        })}
      </div>
    </MuiThemeProvider>;

  }
}