import React from 'react'
import { StyledButtonCard, StyledCoffeeCard, StyledTextCard, StyledTitleCard } from './CoffeeShops.styled'
import { Button } from '../Button/Button'

export const CoffeCard = ({ title, desc, onClick }) => {
	return (
		<StyledCoffeeCard>
			<StyledTitleCard>{title}</StyledTitleCard>
			<StyledTextCard>{desc.slice(0, 155)}...</StyledTextCard>
			<Button onClick={onClick}>Add to cart</Button>
		</StyledCoffeeCard>
	)
}
