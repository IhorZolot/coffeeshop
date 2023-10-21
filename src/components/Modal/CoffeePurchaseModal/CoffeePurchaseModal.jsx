import React, { useState } from 'react'
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
import { useCart } from '../../context/CartContext'

export const CoffeePurchaseModal = () => {
	const { cart, close } = useCart()
	const [quantities, setQuantities] = useState([])

	const handleIncQuantity = index => {
		const newQuantities = [...quantities]
		newQuantities[index] += 1
		setQuantities(newQuantities)
	}

	const handleDecQuantity = index => {
		if (quantities[index] > 0) {
			const newQuantities = [...quantities]
			newQuantities[index] -= 1
			setQuantities(newQuantities)
		}
	}
	return (
		<StyledModalCard>
			<StyledModalTitle>
				<StyledCoffeeInfo>Кава</StyledCoffeeInfo>
				<StyledCartlIcon>
					<TiShoppingCart />
				</StyledCartlIcon>
			</StyledModalTitle>
			<StyledLine />
			<StyledTotalCard>
				{cart.map((coffee, id) => (
					<StyledTotalCardLi key={id}>
						<StyledCoffeeName> {coffee.title}</StyledCoffeeName>
						<StyledQuantity>
							<StyledCoffeeQuantity onClick={() => handleDecQuantity(id)}>
								<span>-</span>
							</StyledCoffeeQuantity>
							<h3>{quantities[id]}</h3>
							<StyledCoffeeQuantity onClick={() => handleIncQuantity(id)}>
								<span>+</span>
							</StyledCoffeeQuantity>
						</StyledQuantity>
						<>
							<TiTrash />
						</>
					</StyledTotalCardLi>
				))}
			</StyledTotalCard>
			<StyledLine />
			<StyledCashPrice>
				<a href='#shop' onClick={close}>
					Додати каву
				</a>
				<StyledTotalPrice>Вартість напоів: грн</StyledTotalPrice>
				<Button>Замовити</Button>
			</StyledCashPrice>
		</StyledModalCard>
	)
}
