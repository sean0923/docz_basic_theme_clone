import React from 'react';
import styled from 'styled-components';

// -----------------------------------------------------------------------------------------
// ---------------------------------- Styled Components ------------------------------------
// -----------------------------------------------------------------------------------------
const Wrapper = styled.div`padding: 0 40px 40px 40px;`;

const LayoutBasePage = ({ children }) => {
	return <Wrapper>{children}</Wrapper>;
};

export default LayoutBasePage;
