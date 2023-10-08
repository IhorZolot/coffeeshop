import React from 'react'
import {
	StyledAddress,
	StyledAddressButton,
	StyledAddressText,
	StyledAddressTitle,
	StyledContacts,
	StyledMap,
} from './Contacts.styled'

export const Contacts = () => {
	return (
		<StyledContacts>
			<StyledMap>MAP</StyledMap>
			<StyledAddress>
				<StyledAddressTitle>Our address</StyledAddressTitle>
				<StyledAddressText>110 St-Cathedral Pkwy Station</StyledAddressText>
				<StyledAddressText>4310 94th St, Flushing</StyledAddressText>
				<StyledAddressButton>See more address</StyledAddressButton>
			</StyledAddress>
		</StyledContacts>
	)
}
