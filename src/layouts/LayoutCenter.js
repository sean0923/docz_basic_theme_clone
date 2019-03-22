import React from 'react';
import styled from 'styled-components';

// -----------------------------------------------------------------------------------------
// ---------------------------------- Styled Components ------------------------------------
// -----------------------------------------------------------------------------------------
const Wrapper = styled.div`
	display: flex;
	/* align-items: center; */
	justify-content: center;
`;

const LayoutCenter = ({ children }) => {
	return (
		<Wrapper className="test">
			<div>{children}</div>
		</Wrapper>
	);
};

export default LayoutCenter;
