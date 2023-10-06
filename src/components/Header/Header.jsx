import { Button } from '../Button'
import { StyledHeader, StyledUl } from './Header.styled'
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai'
export const Header = () => {
	const links = ['About us', 'Promotion', 'Shop', 'Contacts']
	return (
		<StyledHeader>
			<h2>Logo</h2>
			{/* <Button title='Contact us' />
			<Button title='Order now' />
			<Button title='Lets login' /> */}
			<Button>
				<AiOutlineArrowRight />
			</Button>
			<Button>
				<AiOutlineArrowLeft />
			</Button>

			<StyledUl>
				{links.map(item => (
					<li key={item}>{item}</li>
				))}
			</StyledUl>
			<button>Contact Us</button>
		</StyledHeader>
	)
}
