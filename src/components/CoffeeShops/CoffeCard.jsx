import React from 'react'
import { StyledCoffeeCard, StyledTextCard, StyledTitleCard } from './CoffeeShops.styled'
import { Button } from '../Button/Button'
import { useCart } from '../context/CartContext'

export const CoffeCard = ({ title, desc }) => {
	const { toggleModal } = useCart()
	return (
		<StyledCoffeeCard>
			<StyledTitleCard>{title}</StyledTitleCard>
			<StyledTextCard>{desc.slice(0, 200)}...</StyledTextCard>
			<Button onClick={() => toggleModal(title)}>Add to cart</Button>
		</StyledCoffeeCard>
	)
}
