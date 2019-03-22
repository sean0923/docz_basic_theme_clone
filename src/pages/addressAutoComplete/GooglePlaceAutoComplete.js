import React, { Component } from 'react';
import PlacesAutocomplete, { geocodeByAddress } from 'react-places-autocomplete';
import Input from '../../components/common/Input';

class GooglePlaceAutoComplete extends Component {
	handleSelect = (address) => {
		const { populateValues } = this.props;

		geocodeByAddress(address)
			.then((results) => {
				const [ street, city, state ] = address.split(', ');
				const postal_code = results[0].address_components[6].short_name;
				populateValues({ street, city, state, postal_code });
			})
			.catch((error) => {
				console.log('error: ', error);
			});
	};

	render() {
		const { formValues, handleChange, street } = this.props;

		return (
			<PlacesAutocomplete
				value={formValues.street}
				onChange={handleChange}
				onSelect={this.handleSelect}
			>
				{({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
					<div>
						<Input
							label={street}
							name={street}
							{...getInputProps({
								placeholder: 'Search Places ...',
								className: 'location-search-input',
							})}
						/>
						<div className="autocomplete-dropdown-container">
							{loading && <div>Loading...</div>}
							{suggestions.map((suggestion) => {
								const className = suggestion.active ? 'suggestion-item--active' : 'suggestion-item';
								// inline style for demonstration purpose
								const style = suggestion.active
									? { backgroundColor: '#fafafa', cursor: 'pointer' }
									: { backgroundColor: '#ffffff', cursor: 'pointer' };
								return (
									<div
										{...getSuggestionItemProps(suggestion, {
											className,
											style,
										})}
									>
										<span>{suggestion.description}</span>
									</div>
								);
							})}
						</div>
					</div>
				)}
			</PlacesAutocomplete>
		);
	}
}

export default GooglePlaceAutoComplete;
