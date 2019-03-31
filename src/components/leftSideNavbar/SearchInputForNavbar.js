import React from 'react';
import styled from 'styled-components';

// -----------------------------------------------------------------------------------------
// ----------------------------------- Component Import ------------------------------------
// -----------------------------------------------------------------------------------------
import InputForSearch from '../common/InputForSearch';

// -----------------------------------------------------------------------------------------
// ---------------------------------- Styled Components ------------------------------------
// -----------------------------------------------------------------------------------------
const Wrapper = styled.div`
	/* height: 100%; */
	padding: 24px;
`;

const SearchForNavbar = () => {
	return (
		<Wrapper className="test">
			<InputForSearch placeholder="Search ..." />
		</Wrapper>
	);
};

export default SearchForNavbar;