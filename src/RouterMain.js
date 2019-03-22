import React from 'react';

import { Router } from '@reach/router';

// -----------------------------------------------------------------------------------------
// ----------------------------------- Component Import ------------------------------------
// -----------------------------------------------------------------------------------------
import Home from './pages/Home';
import AddressAutoComplete from './pages/AddressAutoComplete';

const RouterMain = () => {
	return (
		<Router>
			<Home path="/" />
			<AddressAutoComplete path="/address-auto-complete" />
		</Router>
	);
};

export default RouterMain;
