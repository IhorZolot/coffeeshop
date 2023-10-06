import { StyledHome, StyledHomeContacts, StyledHomeLogo } from './Home.styled'

export const Home = () => {
	return (
		<StyledHome>
			<StyledHomeLogo>
				<h3>Drink coffee, enjoy with Mova</h3>
				<h1>Coffee Shop</h1>
				<button>Order here</button>
			</StyledHomeLogo>
			<div>
				<p>r</p>
			</div>
			<StyledHomeContacts>
				<p>Follow us</p>
				<p>Contacts </p>
			</StyledHomeContacts>
		</StyledHome>
	)
}
