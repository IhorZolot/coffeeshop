import { TiShoppingCart, TiTrash } from 'react-icons/ti'
import {
	StyledCartlIcon,
	StyledCashPrice,
	StyledCoffeeInfo,
	StyledCoffeeName,
	StyledCoffeeQuantity,
	StyledLine,
	StyledModalCard,
	StyledModalTitle,
	StyledQuantity,
	StyledQuantityBox,
	StyledTotalCard,
	StyledTotalCardLi,
	StyledTotalPrice,
} from './CoffeePurchaseModal.styled'
import { Button } from '../../Button/Button'
import { useCart } from '../../../context/CartContext'

export const CoffeePurchaseModal = () => {
	const { cart, close, handleDecQuantity, handleIncQuantity, totalCoffeeCounter, deleteFromCart, totalCoffeePrice } =
		useCart()

	return (
		<StyledModalCard>
			<StyledModalTitle>
				<StyledCoffeeInfo>Coffee</StyledCoffeeInfo>
				<StyledCartlIcon>
					{totalCoffeeCounter}
					{''}
					<TiShoppingCart />
				</StyledCartlIcon>
			</StyledModalTitle>
			<StyledLine />
			<StyledTotalCard>
				{cart.map(coffee => (
					<StyledTotalCardLi key={coffee.id}>
						<StyledCoffeeName> {coffee.title}</StyledCoffeeName>
						<StyledQuantityBox>
							<StyledQuantity>
								<StyledCoffeeQuantity onClick={() => handleDecQuantity(coffee.id)}>
									<span>-</span>
								</StyledCoffeeQuantity>
								<h3>{coffee.count}</h3>
								<StyledCoffeeQuantity onClick={() => handleIncQuantity(coffee.id)}>
									<span>+</span>
								</StyledCoffeeQuantity>
							</StyledQuantity>

							<TiTrash onClick={() => deleteFromCart(coffee.id)} />
						</StyledQuantityBox>
					</StyledTotalCardLi>
				))}
			</StyledTotalCard>
			<StyledLine />
			<StyledCashPrice>
				<a href='#shop' onClick={close}>
					Add Coffee
				</a>
				<StyledTotalPrice>
					Total price: {totalCoffeePrice}
					grn
				</StyledTotalPrice>
				<Button>Buy</Button>
			</StyledCashPrice>
		</StyledModalCard>
	)
}
