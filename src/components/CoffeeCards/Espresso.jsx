import React from 'react'
import { StyledButtonCard, StyledCoffeeCard, StyledTextCard, StyledTitleCard } from './CoffeeCard.styled'

export const Espresso = () => {
	return (
		<StyledCoffeeCard>
			<StyledTitleCard>Espresso</StyledTitleCard>
			<StyledTextCard>
				Espresso - black coffee made in a coffee machine or a special coffee machine, where hot water is passed through
				pressed ground beans at a pressure.
			</StyledTextCard>
			<StyledButtonCard>Add to cart</StyledButtonCard>
		</StyledCoffeeCard>
	)
}
