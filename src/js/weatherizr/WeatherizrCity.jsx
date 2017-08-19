import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';

//Renders the weather for one city.
export default class WeatherizrCity extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
    this.openDeletePopup = this.openDeletePopup.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.deleteEntry = this.deleteEntry.bind(this);
  }

  openDeletePopup() {
    this.setState({open: true});
  }

  handleClose() {
    this.setState({open: false});
  }

  deleteEntry() {
    this.setState({open: false});
    this.props.onDeleteCity(this.props.index);
  }

  render() {

    const actions = [
      <FlatButton
        label="Cancel"
        onClick={this.handleClose}
      />,
      <FlatButton
        label="Remove"
        secondary={true}
        color="red500"
        onClick={this.deleteEntry}
      />,
    ];

    return <div className="weatherizr-city">
      <span className="city-name">{this.props.city.name}</span>
      <div className="weather-entries">
        {this.props.city.weather.slice(0, 5).map((entry, index) => {
          return <WeatherEntry data={entry} key={index} />
        })}
      </div>
      <span className="delete" onClick={this.openDeletePopup}><i className="fa fa-times" aria-hidden="true"></i></span>

      <Dialog
        title="Remove City"
        actions={actions}
        modal={true}
        open={this.state.open}>
        Are you sure you wish to remove this city?
      </Dialog>

    </div>
  }

}

// "Dumb" component that just renders the icon, description, and time.
function WeatherEntry(props) {

  //Rendering the correct icon is slightly complex.  We get a day or not icon based on the display time.
  //in the API:
  let icon = 'wi wi-day-';

  if(props.data.dt_txt.match(/21:00:00|00:00:00|03:00:00|06:00:00/)) {
    icon = 'wi wi-night-';
  }

  //The rest of the icon name is determined by the description.
  let weatherDescription = props.data.weather[0].description;

  //We match up the most common weather patterns and select an appropriate icon based on that.  Note that
  //not every weather pattern (e.g. hail, volcanoes, earthquakes) are accounted for.
  //Taken from: https://erikflowers.github.io/weather-icons/

  if(weatherDescription.match(/thunderstorm/)) {
    icon += 'thunderstorm';
  }
  else if(weatherDescription.match(/rain/)) {
    icon += 'rain';
  }
  else if(weatherDescription.match(/snow/)) {
    icon += 'snow';
  }
  else if(weatherDescription.match(/cloud|mist/)) {
    icon += 'cloudy';
  }
  else {
    if(icon.match(/day/)) {
      icon += 'sunny';
    }
    else {
      icon += 'clear';
    }
  }

  return <div className="weather-entry">
    <div className="icon"><i className={icon}></i></div>
    <div className="description">{props.data.weather[0].description}</div>
    <div className="time">{props.data.dt_txt.replace(/:00$/, '')}</div>
  </div>;
}