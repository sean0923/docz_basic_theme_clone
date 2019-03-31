import React from 'react';
import styled from 'styled-components';

// -----------------------------------------------------------------------------------------
// ----------------------------------- Component Import ------------------------------------
// -----------------------------------------------------------------------------------------
import TitleForNavbar from './leftSideNavbar/TitleForNavbar';
import SearchInputForNavbar from './leftSideNavbar/SearchInputForNavbar';

// -----------------------------------------------------------------------------------------
// ---------------------------------- Styled Components ------------------------------------
// -----------------------------------------------------------------------------------------
const Wrapper = styled.div`background-color: #f5f6f7;`;

const LeftSideNavbar = () => {
	return (
		<Wrapper>
			<TitleForNavbar text="Title" />
			<SearchInputForNavbar />
			<div>LeftSideNavbar</div>
			<div>LeftSideNavbar</div>
			<div>LeftSideNavbar</div>
		</Wrapper>
	);
};

export default LeftSideNavbar;
