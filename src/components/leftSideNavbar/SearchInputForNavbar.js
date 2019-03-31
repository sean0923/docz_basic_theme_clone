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
	padding: 24px;
	border-top: 1px solid rgb(206, 212, 222);
	border-bottom: 1px solid rgb(206, 212, 222);
`;

const SearchForNavbar = () => {
	return (
		<Wrapper>
			<InputForSearch placeholder="Search ..." />
		</Wrapper>
	);
};

export default SearchForNavbar;
