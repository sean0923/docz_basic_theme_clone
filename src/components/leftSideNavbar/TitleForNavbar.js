import React from 'react';
import styled from 'styled-components';

// -----------------------------------------------------------------------------------------
// ---------------------------------- Styled Components ------------------------------------
// -----------------------------------------------------------------------------------------
const Wrapper = styled.div`
	font-size: 24px;
  font-weight: bold;
  padding: 24px;
`;

const Title = ({ text }) => {
	return <Wrapper >{text}</Wrapper>;
};

export default Title;
