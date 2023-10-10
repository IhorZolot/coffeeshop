import React from 'react'
import { StyledButtonCard, StyledCoffeeCard, StyledTextCard, StyledTitleCard } from './CoffeeShops.styled'
import { Button } from '../Button/Button'

export const Americano = () => {
	return (
		<StyledCoffeeCard>
			<StyledTitleCard>Espresso</StyledTitleCard>
			<StyledTextCard>
				Espresso - black coffee made in a coffee machine or a special coffee machine, where hot water is passed through
				pressed ground beans at a pressure.
			</StyledTextCard>
			<Button>Add to cart</Button>
		</StyledCoffeeCard>
	)
}
