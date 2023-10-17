import React, { useEffect, useState } from 'react'
import { Sprite } from '/public/pictures/Sprite'
import { StyledHeader, StyledHeaderBurger, StyledHeaderButton, StyledHeaderLogo, StyledHeaderMobile, StyledHeaderUl } from './Header.styled'
import { MobileMenu } from '../MobileMenu/MobileMenu'
import { useModal } from '../../hooks/useModal'
import { Modal } from '../Modal/Modal'

export const Header = () => {
	const {isOpen, toggleModal} = useModal()
	const phoneNumber = '+380507047889'
	const links = ['About us', 'Promotion', 'Shop', 'Contacts']

	const [isMenuOpen, setIsMenuOpen] = useState(false)

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen)
	}

	useEffect(()=> {
		if(isMenuOpen){
			document.body.style.overflow='hidden'
		}
		else {
			document.body.style.overflow='visible'
		}
	},[isMenuOpen])


	return (
		<StyledHeader >
			<StyledHeaderBurger onClick={toggleMenu}>
				<Sprite name={'burger-menu'} />
			</StyledHeaderBurger>
			<StyledHeaderLogo>
				<a href='/#Home'><img src='/pictures/logoMova.svg' alt='Cafe Logo' /></a>
			</StyledHeaderLogo>
			<StyledHeaderMobile>
					<a href={`tel:${phoneNumber}`}><Sprite name={'decor-phone'} /></a>
				</StyledHeaderMobile>
			<StyledHeaderUl>
				<button onClick={toggleModal}>Exit</button>
				{links.map(item => (
					<li key={item}>
						<a href={`/#${item}`}>{item}</a>
					</li>
				))}
				<StyledHeaderButton>
					<a href={`tel:${phoneNumber}`}>Contact Us</a>
				</StyledHeaderButton>
			</StyledHeaderUl>
			{isMenuOpen && <MobileMenu close={toggleMenu} />}

			{isOpen && (
				<Modal onClose={toggleModal}>
					{/* <CoffeePurchaseModal /> */}
					<h1>Чи точно ти хочеш вийти?</h1>
					<button>Tak</button>
					<button>Hi</button>
				</Modal>
			)}
		</StyledHeader>
	)
}
