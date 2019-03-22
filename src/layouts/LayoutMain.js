import React from 'react';
import styled from 'styled-components';

// -----------------------------------------------------------------------------------------
// ----------------------------------- Component Import ------------------------------------
// -----------------------------------------------------------------------------------------
import Navbar from '../components/Navbar';

// -----------------------------------------------------------------------------------------
// ---------------------------------- Styled Components ------------------------------------
// -----------------------------------------------------------------------------------------
const Wrapper = styled.div`
	margin: 40px;
	/* background-color: rgba(0, 0, 0, .1); */
`;

const BodyWarpper = styled.div`
	padding: 12px;
	min-height: 800px;
`;

const LayoutMain = ({ children }) => {
	return (
		<Wrapper className="test">
			<Navbar />
			<BodyWarpper className="test">{children}</BodyWarpper>
		</Wrapper>
	);
};

export default LayoutMain;
