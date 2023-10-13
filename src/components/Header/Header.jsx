import React from 'react'
import { Sprite } from '/public/pictures/Sprite'
import { StyledHeader, StyledHeaderBurger, StyledHeaderButton, StyledHeaderLogo, StyledHeaderUl } from './Header.styled'

export const Header = () => {
	const phoneNumber = '+380730000000'
	const links = ['About us', 'Promotion', 'Shop', 'Contacts']
	return (
		<StyledHeader>
			<StyledHeaderBurger>
				<Sprite name={'burger-menu'} />
			</StyledHeaderBurger>
			<StyledHeaderLogo>
				<img src='/pictures/logoMova.svg' alt='Cafe Logo' />
			</StyledHeaderLogo>
			<StyledHeaderUl>
				{links.map(item => (
					<li key={item}>
						<a href={`/#${item}`}>{item}</a>
					</li>
				))}
				<StyledHeaderButton>
					<a href={`tel:${phoneNumber}`}>Contact Us</a>
				</StyledHeaderButton>
			</StyledHeaderUl>
		</StyledHeader>
	)
}
