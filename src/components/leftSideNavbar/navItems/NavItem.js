import React from 'react';
import styled from 'styled-components';

// -----------------------------------------------------------------------------------------
// ---------------------------------- Styled Components ------------------------------------
// -----------------------------------------------------------------------------------------
const Wrapper = styled.div`
	font-size: 20px;
	color: black;
	font-weight: bold;
	padding: 4px 24px;
	cursor: pointer;
	&:hover {
		color: #0b5fff;
	}
`;

const NavItem = ({ text }) => {
	return <Wrapper>{text}</Wrapper>;
};

export default NavItem;
