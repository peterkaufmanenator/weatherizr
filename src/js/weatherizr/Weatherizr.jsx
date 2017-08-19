import React from 'react';
import $ from "jquery";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import WeatherizrSearch from "./WeatherizrSearch.jsx";
import WeatherizrCity from "./WeatherizrCity.jsx";

const apiKey = 'fa64a852c9a8e9d86a09f999651510f7';

export default class Weatherizr extends React.Component {

	constructor(props) {
		super(props);
		this.state = {'cities': []};
		this.handleAddCity = this.handleAddCity.bind(this);
	}

	handleAddCity(city) {

		$.getJSON(`http://api.openweathermap.org/data/2.5/forecast?id=${city.id}&mode=json&appid=${apiKey}&callback=?`, (data) => {
			city.weather = data.list;
			this.setState({'cities': this.state.cities.concat([city])});
		});

	}

	render() {

		return <MuiThemeProvider>
			<div className="app">
				<h1>Weatherizr</h1>
				<WeatherizrSearch onAddCity={this.handleAddCity}></WeatherizrSearch>
				{this.state.cities.map((city, index) => {
					return <WeatherizrCity city={city} key={index}></WeatherizrCity>;
				})}
			</div>
		</MuiThemeProvider>;

	}
}