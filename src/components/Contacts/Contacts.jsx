import React from 'react'
import {
	StyledAddress,
	StyledAddressButton,
	StyledAddressText,
	StyledAddressTitle,
	StyledContacts,
	StyledMap,
	StyledSpanContacts,
} from './Contacts.styled'

export const Contacts = () => {
	return (
		<StyledContacts>
			<StyledSpanContacts>Contacts</StyledSpanContacts>
			<StyledMap>
				<img src={'/public/pictures/snazzy-image (1) 1.png'} />
			</StyledMap>
			<StyledAddress>
				<StyledAddressTitle>Our address</StyledAddressTitle>
				<StyledAddressText>110 St-Cathedral Pkwy Station</StyledAddressText>
				<StyledAddressText>4310 94th St, Flushing</StyledAddressText>
				<StyledAddressButton>See more address</StyledAddressButton>
			</StyledAddress>
		</StyledContacts>
	)
}
