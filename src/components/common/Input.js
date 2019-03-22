import React from 'react';
import styled from 'styled-components';

// -----------------------------------------------------------------------------------------
// ---------------------------------- Styled Components ------------------------------------
// -----------------------------------------------------------------------------------------

const InputWrapper = styled.input`
	display: block;
	font-size: 14px;
	padding: 8px 20px;
	width: 100%;
`;

const Input = (props) => {
	const { label, id, ...rest } = props;
	return (
		<div>
			{label && <label htmlFor={id}>{label}</label>}
			<InputWrapper id={id} {...rest} />
		</div>
	);
};

export default Input;
