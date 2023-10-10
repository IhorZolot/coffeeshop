import React from 'react'
import { StyledButtonCard, StyledCoffeeCard, StyledTextCard, StyledTitleCard } from './CoffeeShops.styled'
import { Button } from '../Button/Button'

export const Cappuccino = () => {
	return (
		<StyledCoffeeCard>
			<StyledTitleCard>Cappuccino</StyledTitleCard>
			<StyledTextCard>
				Cappuccino is coffee which is made using milk and has froth and sometimes powdered chocolate on top. A
				cappuccino is a cup of cappuccino.
			</StyledTextCard>
			<Button>Add to cart</Button>
		</StyledCoffeeCard>
	)
}
