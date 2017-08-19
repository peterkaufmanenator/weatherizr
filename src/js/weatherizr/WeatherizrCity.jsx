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
  return <div className="weather-entry">
    <img className="icon" src={ `http://openweathermap.org/img/w/${props.data.weather[0].icon}.png` } />
    <div className="description">{props.data.weather[0].description}</div>
    <div className="time">{props.data.dt_txt}</div>
  </div>;
}