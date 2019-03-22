import { useState } from 'react';

const useAutoCompleteForm = () => {
	const [ formValues, setFormValues ] = useState({
		street: '',
		city: '',
		state: '',
		postal_code: '',
	});

	const populateValues = ({ street, city, state, postal_code }) => {
		setFormValues({
			...formValues,
			street,
			city,
			state,
			postal_code,
		});
	};

	const handleChange = (e) => {
		if (e.target) {
			setFormValues({
				...formValues,
				[e.target.name]: e.target.value,
			});
		} else {
			setFormValues({
				...formValues,
				street: e,
			});
		}
	};

	return { formValues, populateValues, handleChange };
};

export default useAutoCompleteForm;
