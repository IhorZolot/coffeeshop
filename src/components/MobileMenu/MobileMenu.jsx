import { BsInstagram, BsFacebook,BsTelegram } from 'react-icons/bs';
import { Sprite } from '/public/pictures/Sprite'
import {
	StyledButton,
	StyledButtonSvg,
	StyledLinkMenu,
	StyledLogo,
	StyledMobileMenu,
	StyledSocialIcon,
	StyledSocialIconMenu,
} from './MobileMenu.styled'

export const MobileMenu = ({toggleMenu}) => {
	const links = ['Home', 'About us', 'Promotion', 'Shop', 'Contacts']
	return (
		<StyledMobileMenu>
			<StyledLogo>
				<img src='/pictures/logoMova.svg' alt='Cafe Logo' />
			</StyledLogo>
			<StyledButton onClick={toggleMenu}>
				<StyledButtonSvg>
					<Sprite name={'windows-close'} />
				</StyledButtonSvg>
			</StyledButton>
			<StyledLinkMenu>
				{links.map(item => (
					<li key={item}>
						<a href={`/#${item}`}>{item}</a>
						</li>
				))}
			</StyledLinkMenu>
			<StyledSocialIconMenu>
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
			</StyledSocialIconMenu>
		</StyledMobileMenu>
	)
}
