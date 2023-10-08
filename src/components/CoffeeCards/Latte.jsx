import React from 'react'
import { StyledButtonCard, StyledCoffeeCard, StyledTextCard, StyledTitleCard } from './CoffeeCard.styled'

export const Latte = () => {
	return (
		<StyledCoffeeCard>
			<StyledTitleCard>Latte</StyledTitleCard>
			<StyledTextCard>
				The name Latte (from Italian “milk”) speaks about the main ingredient of the drink. It is recommended to take
				fat milk - at least 3.2%. In addition to it, milk foam.
			</StyledTextCard>
			<StyledButtonCard>Add to cart</StyledButtonCard>
		</StyledCoffeeCard>
	)
}
