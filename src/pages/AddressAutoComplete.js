import React from 'react';

// -----------------------------------------------------------------------------------------
// ----------------------------------- Component Import ------------------------------------
// -----------------------------------------------------------------------------------------
import GooglePlaceAutoComplete from './addressAutoComplete/GooglePlaceAutoComplete';
import Input from '../components/common/Input';

// -----------------------------------------------------------------------------------------
// --------------------------------------- Helper ------------------------------------------
// -----------------------------------------------------------------------------------------
import useAutoCompleteForm from '../hooks/useAutoCompleteForm';

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
		</div>
	);
};

export default AddressAutoComplete;
