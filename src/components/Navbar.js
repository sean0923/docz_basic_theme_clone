import React from 'react';
import { Link } from '@reach/router';
import styled from 'styled-components';

// -----------------------------------------------------------------------------------------
// ---------------------------------- Styled Components ------------------------------------
// -----------------------------------------------------------------------------------------
const NavWarpper = styled.div`
	/* background-color: rgba(0, 0, 0, .1); */
	display: flex;
	flex-wrap: wrap;
	& > *:not(:last-child) {
		margin-right: 8px;
	}
`;

const Navbar = () => {
	return (
		<NavWarpper className="test">
			<Link to="/">Home</Link>
			<Link to="/address-auto-complete">Address Auto Complete</Link>
		</NavWarpper>
	);
};

export default Navbar;
