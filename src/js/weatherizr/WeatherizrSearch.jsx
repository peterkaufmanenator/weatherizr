import React from 'react';
import AutoComplete from 'material-ui/AutoComplete';
import CityData from './city.list.subset.json';

const source = CityData;

const dataSourceConfig = {
  text: 'name',
  value: 'id',
};

export default class WeatherizrSearch extends React.Component {

  handleUpdateInput(value) {
    this.setState({
      dataSource: [
        value,
        value + value,
        value + value + value,
      ],
    });
  };

  render() {
    return (
      <div className="weatherizr-search">
			<AutoComplete
				floatingLabelText="Select a city."
				filter={AutoComplete.noFilter}
				openOnFocus={true}
				dataSource={source}
				dataSourceConfig={dataSourceConfig}
				fullWidth={true}
			/>
      </div>
    );
  }
}