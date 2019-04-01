import React from 'react';
import styled from 'styled-components';
import { Link } from '@reach/router';

// -----------------------------------------------------------------------------------------
// ---------------------------------- Styled Components ------------------------------------
// -----------------------------------------------------------------------------------------
const Wrapper = styled(Link)`
  display: block;
  text-decoration: none;
  line-height: 1.6;

	font-size: 20px;
	color: black;
	font-weight: bold;
	padding: 4px 24px;
	cursor: pointer;
	&:hover {
		color: #0b5fff;
	}
`;

const NavItem = ({ text, path }) => {
	return <Wrapper to={path}>{text}</Wrapper>;
};

export default NavItem;
