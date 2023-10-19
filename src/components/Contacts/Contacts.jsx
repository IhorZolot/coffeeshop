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
	const phoneNumber = '+380507047889'
	return (
		<StyledContacts id='Contacts'>
			<StyledSpanContacts>Contacts</StyledSpanContacts>
			<StyledMap>
				<iframe
					src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2540.205654981756!2d30.5008410767502!3d50.45589497159321!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4ce670b5a7155%3A0x42744e62c306671!2z0JvQvtC20LA!5e0!3m2!1sru!2sua!4v1697216734110!5m2!1sru!2sua'
					style={{ border: '4' }}
					allowFullScreen=''
					loading='lazy'
				></iframe>
			</StyledMap>
			<StyledAddress>
				<StyledAddressTitle>Our address</StyledAddressTitle>
				<StyledAddressText>13 Sichovykh Strilʹtsiv street</StyledAddressText>
				<StyledAddressText>45 Sichovykh Strilʹtsiv street</StyledAddressText>
				<StyledAddressButton>
				<a href={`tel:${phoneNumber}`}>Contact Us</a></StyledAddressButton>
			</StyledAddress>
		</StyledContacts>
	)
}
