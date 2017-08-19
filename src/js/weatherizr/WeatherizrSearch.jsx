import React from 'react';
import AutoComplete from 'material-ui/AutoComplete';
import CityData from './city.list.subset.json';

const source = CityData;

const dataSourceConfig = {
  text: 'name',
  value: 'id',
};

export default class WeatherizrSearch extends React.Component {

  constructor(props) {
  	super(props);
  	this.handleAddCity = this.handleAddCity.bind(this);
  	this.state = {'searchText': ''};
  	this.handleUpdateInput = this.handleUpdateInput.bind(this);
  }

  handleUpdateInput(searchText) {
  	this.setState({'searchText': searchText});
  }

  handleAddCity(chosenRequest) {
  	this.setState({'searchText': ''});
  	this.props.onAddCity({'id': chosenRequest.id, 'name': chosenRequest.name});
  }

  render() {
    return (
      <div className="weatherizr-search">
			<AutoComplete
				floatingLabelText="Select a city."
				searchText={this.state.searchText}
				onUpdateInput={this.handleUpdateInput}
				filter={AutoComplete.noFilter}
				openOnFocus={true}
				dataSource={source}
				dataSourceConfig={dataSourceConfig}
				onNewRequest={this.handleAddCity}
				fullWidth={true}
			/>
      </div>
    );
  }
}