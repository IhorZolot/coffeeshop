import { Sprite } from '/public/pictures/Sprite'
import { StyledBoxGrinder, StyledBoxSocial, StyledButtonHome, StyledDecorLine, StyledFirstHome, StyledHome, StyledSecondHome, StyledSocialIcon, StyledSpanText, StyledTitleH1, StyledTitleH3 } from './Home.styled'

export const Home = () => {
	return (
		<StyledHome>
			<StyledFirstHome>
			<StyledTitleH3>Drink coffee, enjoy with Samwyle</StyledTitleH3>
			<StyledTitleH1>Coffee Shop</StyledTitleH1>
			<StyledButtonHome>Order here</StyledButtonHome>
			</StyledFirstHome>
			<StyledSecondHome>
				<StyledDecorLine>
					<Sprite name={'decor-line'}/>
				</StyledDecorLine>
				<StyledBoxGrinder>
					<img src={'/public/pictures/coffee-grinder.svg'} alt='coffee-grinder'/>
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
			</StyledSecondHome>
		</StyledHome>
	)
}
