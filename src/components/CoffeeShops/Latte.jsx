import React from 'react'
import { StyledButtonCard, StyledCoffeeCard, StyledTextCard, StyledTitleCard } from './CoffeeShops.styled'
import { Button } from '../Button/Button'

export const Latte = () => {
	return (
		<StyledCoffeeCard>
			<StyledTitleCard>Latte</StyledTitleCard>
			<StyledTextCard>
				The name Latte (from Italian “milk”) speaks about the main ingredient of the drink. It is recommended to take
				fat milk - at least 3.2%. In addition to it, milk foam.
			</StyledTextCard>
			<Button>Add to cart</Button>
		</StyledCoffeeCard>
	)
}
