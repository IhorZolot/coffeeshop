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
				<StyledCoffeeInfo>Кава</StyledCoffeeInfo>
				<StyledCartlIcon>
					{totalCoffeeCounter}
					<TiShoppingCart />
				</StyledCartlIcon>
			</StyledModalTitle>
			<StyledLine />
			<StyledTotalCard>
				{cart.map(coffee => (
					<StyledTotalCardLi key={coffee.id}>
						<StyledCoffeeName> {coffee.title}</StyledCoffeeName>
						<>
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
						</>
					</StyledTotalCardLi>
				))}
			</StyledTotalCard>

			<StyledCashPrice>
				<a href='#shop' onClick={close}>
					Додати каву
				</a>
				<StyledTotalPrice>Вартість напоів: {totalCoffeePrice}грн</StyledTotalPrice>
				<Button>Замовити</Button>
			</StyledCashPrice>
		</StyledModalCard>
	)
}
