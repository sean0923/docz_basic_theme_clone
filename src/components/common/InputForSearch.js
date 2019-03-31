import React from 'react';
import styled from 'styled-components';

// -----------------------------------------------------------------------------------------
// ---------------------------------- Styled Components ------------------------------------
// -----------------------------------------------------------------------------------------
const Wrapper = styled.div`
	font-size: 20px;
	color: gray;
	display: flex;
	i {
		margin-right: 8px;
	}
	height: 20px;
`;

const InputWrapper = styled.input`
	background-color: transparent;
	/* background-color: rgba(255, 0, 0, .1); */
	outline: none;
	border: none;
	/* font-size: 20px; */
	width: 100%;
`;

const InputForSearch = ({ ...rest }) => {
	return (
		<Wrapper>
			<i className="fas fa-search" />
			<InputWrapper {...rest} />
		</Wrapper>
	);
};

export default InputForSearch;
