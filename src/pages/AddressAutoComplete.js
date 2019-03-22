import React from 'react';
import styled from 'styled-components';

// -----------------------------------------------------------------------------------------
// ----------------------------------- Component Import ------------------------------------
// -----------------------------------------------------------------------------------------
import GooglePlaceAutoComplete from './addressAutoComplete/GooglePlaceAutoComplete';
import Input from '../components/common/Input';

// -----------------------------------------------------------------------------------------
// --------------------------------------- Helper ------------------------------------------
// -----------------------------------------------------------------------------------------
import useAutoCompleteForm from '../hooks/useAutoCompleteForm';

// -----------------------------------------------------------------------------------------
// ---------------------------------- Styled Components ------------------------------------
// -----------------------------------------------------------------------------------------
const Box = styled.div`
	height: 10px;
	background-color: red;
`;

const AddressAutoComplete = () => {
	const { formValues, populateValues, handleChange } = useAutoCompleteForm();

	return (
		<div>
			{[ 'street', 'city', 'state', 'postal_code' ].map((name) => {
				return (
					<Input
						key={name}
						label={name}
						name={name}
						value={formValues[name]}
						onChange={handleChange}
					/>
				);
			})}
			<GooglePlaceAutoComplete
				formValues={formValues}
				handleChange={handleChange}
				populateValues={populateValues}
			/>
			<Box />
		</div>
	);
};

export default AddressAutoComplete;
