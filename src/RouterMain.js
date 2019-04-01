import React from 'react';

import { Router } from '@reach/router';

// -----------------------------------------------------------------------------------------
// ----------------------------------------- Data ------------------------------------------
// -----------------------------------------------------------------------------------------
import dataForNavbar from './data/dataForNavbar';

const RouterMain = () => {
	return (
		<Router>
			{dataForNavbar.map(({ Component, path }) => {
				return <Component key={path} path={path} />;
			})}
		</Router>
	);
};

export default RouterMain;
