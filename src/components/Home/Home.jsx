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

export const Home = () => {
	return (
		<StyledHome>
			<StyledLeftSide>
				<StyledTitleH3>Drink coffee, enjoy with Samwyle</StyledTitleH3>
				<StyledTitleH1>Coffee Shop</StyledTitleH1>
				<Button>Menu</Button>
			</StyledLeftSide>
			<StyledRightSide>
				<StyledDecorLine>
					<Sprite name={'decor-line'} />
				</StyledDecorLine>
				<StyledBoxGrinder>
					<img src={'/pictures/coffee-grinder.svg'} alt='coffee-grinder' />
				</StyledBoxGrinder>
				<StyledBoxSocial>
					<StyledSocialIcon>
						<img src='/pictures/icon-instagram.svg' alt='Instagram Icon' />
					</StyledSocialIcon>
					<StyledSocialIcon>
						<img src='/pictures/icon-facebook.svg' alt='Facebook Icon' />
					</StyledSocialIcon>
					<StyledSocialIcon>
						<img src='/pictures/icon-telegram.svg' alt='Telegram Icon' />
					</StyledSocialIcon>
					<StyledSpanText>Follow us</StyledSpanText>
				</StyledBoxSocial>
			</StyledRightSide>
		</StyledHome>
	)
}
