import { BsInstagram, BsFacebook,BsTelegram } from 'react-icons/bs';
import { Sprite } from '/public/pictures/Sprite'
import {
	StyledBoxGrinder,
	StyledBoxSocial,
	StyledDecorLine,
	StyledHome,
	StyledLeftSide,
	StyledRightSide,
	StyledSocialIcon,
	StyledSpanText,
	StyledTitleH1,
	StyledTitleH3,
} from './Home.styled'
import { Button } from '../Button/Button'
import { useState } from 'react'
import { Menu } from '../Menu/Menu'

export const Home = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false)
	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen)
	}
	return (
		<StyledHome id='Home'>
			<StyledLeftSide>
				<StyledTitleH3>Drink coffee, enjoy with Mova</StyledTitleH3>
				<StyledTitleH1>Coffee Shop</StyledTitleH1>
				<Button onClick={toggleMenu}>Menu</Button>
			</StyledLeftSide>
			<StyledRightSide>
				<StyledDecorLine>
					<Sprite name={'decor-line'} />
				</StyledDecorLine>
				<StyledBoxGrinder>
					<img src={'/pictures/coffee-grinder.svg'} alt='coffee-grinder' />
				</StyledBoxGrinder>
				<StyledBoxSocial>
				<a href="https://www.instagram.com/your_instagram_profile">
					<StyledSocialIcon>
					<BsInstagram />
					</StyledSocialIcon>
    </a>
				<a href="https://www.facebook.com/your_facebook_profile">
				<StyledSocialIcon>
      <BsFacebook />
			</StyledSocialIcon>
    </a>
				<a href="https://t.me/your_telegram_channel">
				<StyledSocialIcon>
      <BsTelegram/>
			</StyledSocialIcon>
    </a>
					<StyledSpanText>Follow us</StyledSpanText>
				</StyledBoxSocial>
			</StyledRightSide>
			{isMenuOpen && <Menu/>}
		</StyledHome>
	)
}
