import React from 'react';
import styled from 'styled-components';

// -----------------------------------------------------------------------------------------
// ----------------------------------- Component Import ------------------------------------
// -----------------------------------------------------------------------------------------
import LeftSideNavbar from '../components/LeftSideNavbar';
import RouterMain from '../RouterMain';

// -----------------------------------------------------------------------------------------
// ---------------------------------- Styled Components ------------------------------------
// -----------------------------------------------------------------------------------------
const Wrapper = styled.div`
	display: grid;
	grid-template-columns: 280px 1fr;
	height: 100vh;
`;

const BodyWrapper = styled.div`
  padding: 0 40px 40px 40px;
`;

const Layout = () => {
	return (
		<Wrapper>
			<LeftSideNavbar />
			<BodyWrapper>
				<RouterMain />
			</BodyWrapper>
		</Wrapper>
	);
};

export default Layout;
