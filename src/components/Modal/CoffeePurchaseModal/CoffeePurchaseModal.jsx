import React, { useState } from 'react'
import { StyledCashPrice, StyledCoffeeInfo, StyledCoffeeName, StyledCoffeeQuantity, StyledLine, StyledModalCard, StyledQuantity,  StyledTotalCard,  StyledTotalPrice } from './CoffeePurchaseModal.styled'
import { Button } from '../../Button/Button'

export const CoffeePurchaseModal = () => {
	const [quantity, setQuantity] = useState(0)

	const handleIncQuantity = () => {
		setQuantity(quantity + 1)
	}
	const handleDecQuantity = () => {
		if (quantity > 0) {
			setQuantity(quantity - 1)
		}
	}

	return (
		<StyledModalCard>
			<StyledCoffeeInfo>Ваше Замовлення</StyledCoffeeInfo>
			<StyledLine />
			<StyledTotalCard>
			<StyledCoffeeName>Назва напою</StyledCoffeeName>
			<StyledQuantity>
				<StyledCoffeeQuantity onClick={handleDecQuantity}><span>-</span></StyledCoffeeQuantity>
				<h3>{quantity}</h3>
				<StyledCoffeeQuantity onClick={handleIncQuantity}><span>+</span></StyledCoffeeQuantity>
			</StyledQuantity>
			<StyledLine />
				<StyledTotalPrice>Загалом: {quantity}</StyledTotalPrice>
			</StyledTotalCard>
			<StyledCashPrice>
			<a href="/shop" className="menu-link active-link">Продовжити</a>
				<Button>Замовити</Button>
			</StyledCashPrice>
		</StyledModalCard>
	)
}



{/* <StyledQuantityLabel>
				<StyledCoffeePic>
					<img src='/pictures/coffee-cup.svg' />
				</StyledCoffeePic>
				<StyledCoffeePic2>
					<img src='/pictures/paper-cup.svg' />
				</StyledCoffeePic2>
			</StyledQuantityLabel> */}