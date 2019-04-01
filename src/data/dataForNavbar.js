import Home from '../pages/Home';
import Page1 from '../pages/Page1';
import Page2 from '../pages/Page2';

export const objKeys = {
	HOME: ' HOME',
	PAGE_1: ' PAGE_1',
	PAGE_2: ' PAGE_2',
};

export const components = {
	[objKeys.HOME]: Home,
	[objKeys.PAGE_1]: Page1,
	[objKeys.PAGE_2]: Page2,
};

export const paths = {
	[objKeys.HOME]: '/',
	[objKeys.PAGE_1]: '/page1',
	[objKeys.PAGE_2]: '/page2',
};

export const texts = {
	[objKeys.HOME]: 'Home',
	[objKeys.PAGE_1]: 'Page 1',
	[objKeys.PAGE_2]: 'Page 2',
};

export default Object.values(objKeys).map((objKey) => {
	return {
		Component: components[objKey],
		path: paths[objKey],
		text: texts[objKey],
	};
});
