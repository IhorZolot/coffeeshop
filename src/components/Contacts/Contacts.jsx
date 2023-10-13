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
				<iframe
					src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12063.715963915576!2d2.355978831378716!3d48.84832059122589!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e671e19ff53a01%3A0x36401da7abfa068d!2z0J3QvtGC0YAt0JTQsNC8LdC00LUt0J_QsNGA0Lg!5e0!3m2!1sru!2sua!4v1697185256406!5m2!1sru!2sua'
					allowfullscreen=''
					loading='lazy'
				/>
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
