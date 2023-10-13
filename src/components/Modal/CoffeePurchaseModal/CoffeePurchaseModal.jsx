import React, { useState } from 'react'
import {
	StyledCoffeeDescription,
	StyledCoffeeInfo,
	StyledCoffeeName,
	StyledCoffeePic,
	StyledModalCard,
	StyledQuantity,
	StyledQuantityLabel,
	StyledTotalPrice,
} from './CoffeePurchaseModal.styled'

export const CoffeePurchaseModal = () => {
	const [quantity, setQuantity] = useState(1)

	const handleIncreaseQuantity = () => {
		setQuantity(quantity + 1)
	}
	const handleDecreaseQuantity = () => {
		if (quantity > 1) {
			setQuantity(quantity - 1)
		}
	}

	return (
		<StyledModalCard>
			<StyledCoffeeInfo>
				<StyledCoffeePic>
					<img src='/pictures/coffee-cup.svg' />
				</StyledCoffeePic>
				<StyledCoffeeName>Americano</StyledCoffeeName>
				<StyledCoffeeDescription>Дрібний помел</StyledCoffeeDescription>
			</StyledCoffeeInfo>

			<StyledQuantity>
				<StyledQuantityLabel>Кількість:</StyledQuantityLabel>
				<div>
					<button onClick={handleDecreaseQuantity}>-</button>
					<input type='number' value={quantity} onChange={e => setQuantity(parseInt(e.target.value))} />
					<button onClick={handleIncreaseQuantity}>+</button>
				</div>
			</StyledQuantity>
			<StyledTotalPrice>До сплатигрн.</StyledTotalPrice>
			<button>Придбати</button>
		</StyledModalCard>
	)
}
