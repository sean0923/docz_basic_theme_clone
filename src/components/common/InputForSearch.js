import React from 'react';
import styled from 'styled-components';

// -----------------------------------------------------------------------------------------
// ----------------------------------- Component Import ------------------------------------
// -----------------------------------------------------------------------------------------
import * as SvgIcons from './SvgIcons';

// -----------------------------------------------------------------------------------------
// ---------------------------------- Styled Components ------------------------------------
// -----------------------------------------------------------------------------------------
const Wrapper = styled.div`
	font-size: 20px;
	color: gray;
	display: flex;
	svg {
		margin-right: 8px;
	}
	height: 20px;
`;

const InputWrapper = styled.input`
	background-color: transparent;
	outline: none;
	border: none;
	width: 100%;
`;

const InputForSearch = ({ ...rest }) => {
	return (
		<Wrapper>
			<SvgIcons.search color="grey" hoverColor="red" width="20px" height="20px" />
			<InputWrapper {...rest} />
		</Wrapper>
	);
};

export default InputForSearch;
