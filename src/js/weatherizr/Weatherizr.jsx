import React from 'react';
import $ from "jquery";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import WeatherizrSearch from "./WeatherizrSearch.jsx";

export default class Weatherizr extends React.Component {
	render() {

		let apiKey = 'fa64a852c9a8e9d86a09f999651510f7';
		let cityId = '1850147'; //Using Tokyo as a test case.

		let url = 'http://api.openweathermap.org/data/2.5/forecast?id=1850147&mode=json&appid=fa64a852c9a8e9d86a09f999651510f7&callback=?';

		$.getJSON('http://api.openweathermap.org/data/2.5/forecast?id=1850147&mode=json&appid=fa64a852c9a8e9d86a09f999651510f7&callback=?', function(data){
			console.log(data);
		});

		return <MuiThemeProvider>
			<div className="app">
				<h1>Weatherizr</h1>
				<WeatherizrSearch></WeatherizrSearch>
			</div>
		</MuiThemeProvider>;
	}
}