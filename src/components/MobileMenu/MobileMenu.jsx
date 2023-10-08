import { Sprite } from '../../../public/pictures/Sprite'
import {
	StyledButton,
	StyledButtonSvg,
	StyledLinkMenu,
	StyledLogo,
	StyledMobileMenu,
	StyledSocialIcon,
	StyledSocialIconMenu,
} from './MobileMenu.styled'

export const MobileMenu = () => {
	const links = ['Home', 'About us', 'Promotion', 'Shop', 'Contacts']
	return (
		<StyledMobileMenu>
			<StyledLogo>
				<img src='/pictures/logo-cafe.svg' alt='Cafe Logo' />
			</StyledLogo>
			<StyledButton>
				<StyledButtonSvg>
					<Sprite name={'windows-close'} />
				</StyledButtonSvg>
			</StyledButton>
			<StyledLinkMenu>
				{links.map(item => (
					<li key={item}>{item}</li>
				))}
			</StyledLinkMenu>
			<StyledSocialIconMenu>
				<StyledSocialIcon>
					<img src='/pictures/icon-instagram.svg' alt='Instagram Icon' />
				</StyledSocialIcon>
				<StyledSocialIcon>
					<img src='/pictures/icon-facebook.svg' alt='Facebook Icon' />
				</StyledSocialIcon>
				<StyledSocialIcon>
					<img src='/pictures/icon-telegram.svg' alt='Telegram Icon' />
				</StyledSocialIcon>
			</StyledSocialIconMenu>
		</StyledMobileMenu>
	)
}
