import ReactDOM from 'react-dom';
import React from 'react';
import Weatherizr from './weatherizr/Weatherizr.jsx';

export default function bootstrapApp() {
	ReactDOM.render(
		<Weatherizr />,
		document.getElementById('app')
	)
}