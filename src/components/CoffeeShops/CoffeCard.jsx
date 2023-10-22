import { StyledCoffeeCard, StyledTextCard, StyledTitleCard } from './CoffeeShops.styled'
import { Button } from '../Button/Button'
import { useCart } from '../../context/CartContext'

export const CoffeCard = ({ product }) => {
	const { title, desc } = product
	const { toggleModal, addToCart } = useCart()
	const handleAddToCart = () => {
		toggleModal({ type: 'purchase' })
		addToCart(product)
	}
	return (
		<StyledCoffeeCard>
			<StyledTitleCard>{title}</StyledTitleCard>
			<StyledTextCard>{desc.slice(0, 200)}...</StyledTextCard>
			<Button onClick={handleAddToCart}>Add to cart</Button>
		</StyledCoffeeCard>
	)
}
