import React from 'react';
import styled from 'styled-components';

// -----------------------------------------------------------------------------------------
// ---------------------------------- Styled Components ------------------------------------
// -----------------------------------------------------------------------------------------
const InputWrapper = styled.input`
	background-color: rgba(255, 0, 0, .1);
	outline: none;
	border: none;
	font-size: 16px;
`;

const InputForSearch = ({ ...rest }) => {
	return <InputWrapper {...rest} />;
};

export default InputForSearch;
