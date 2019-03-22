import React, { Component } from 'react';
import './App.css';

// -----------------------------------------------------------------------------------------
// ----------------------------------- Component Import ------------------------------------
// -----------------------------------------------------------------------------------------
import LayoutMain from './layouts/LayoutMain';
import RouterMain from './RouterMain';

class App extends Component {
	render() {
		return (
			<LayoutMain>
				<RouterMain />
			</LayoutMain>
		);
	}
}

export default App;
