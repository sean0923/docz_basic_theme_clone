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
			<GooglePlaceAutoComplete
        street="street"
				formValues={formValues}
				handleChange={handleChange}
				populateValues={populateValues}
			/>
			{[ 'city', 'state', 'postal_code' ].map((name) => {
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

			<Box />
		</div>
	);
};

export default AddressAutoComplete;
