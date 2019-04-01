import React from 'react';
import styled from 'styled-components';

// -----------------------------------------------------------------------------------------
// ----------------------------------- Component Import ------------------------------------
// -----------------------------------------------------------------------------------------
import LeftSideNavbar from '../components/LeftSideNavbar';
// import Navbar from '../components/Navbar';

// -----------------------------------------------------------------------------------------
// ---------------------------------- Styled Components ------------------------------------
// -----------------------------------------------------------------------------------------
const Wrapper = styled.div`
	display: grid;
	grid-template-columns: 280px 1fr;
	/* padding: 24px; */

	height: 100vh;
`;

const BodyWarpper = styled.div`
	padding: 12px;
	min-height: 800px;
`;

const LayoutMain = ({ children }) => {
	return (
		// <Wrapper className="test">
		<Wrapper>
			<LeftSideNavbar />
			{/* <BodyWarpper className="test">{children}</BodyWarpper> */}
			<BodyWarpper>{children}</BodyWarpper>
		</Wrapper>
	);
};

export default LayoutMain;
