import React from 'react';
import styled from 'styled-components';

// -----------------------------------------------------------------------------------------
// ----------------------------------- Component Import ------------------------------------
// -----------------------------------------------------------------------------------------
import TitleForNavbar from './leftSideNavbar/TitleForNavbar';
import SearchInputForNavbar from './leftSideNavbar/SearchInputForNavbar';
import NavItems from './leftSideNavbar/NavItems';

// -----------------------------------------------------------------------------------------
// ---------------------------------- Styled Components ------------------------------------
// -----------------------------------------------------------------------------------------
const Wrapper = styled.div`
	
  background-color: #f5f6f7;

`;

const LeftSideNavbar = () => {
	return (
		<Wrapper>
			<TitleForNavbar text="Docz Clone" />
			<SearchInputForNavbar />
			<NavItems />
		</Wrapper>
	);
};

export default LeftSideNavbar;
