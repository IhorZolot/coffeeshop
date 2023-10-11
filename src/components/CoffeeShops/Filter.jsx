import React from 'react'
import { StyledButtonCard, StyledCoffeeCard, StyledTextCard, StyledTitleCard } from './CoffeeShops.styled'
import { Button } from '../Button/Button'

export const Filter = () => {
	return (
		<StyledCoffeeCard>
			<StyledTitleCard>Filter</StyledTitleCard>
			<StyledTextCard>
				Total cooking time: 7-8 minutes. The best temperature for brewing coffee is 95°C, it will be in the kettle about
				a minute after the boiling stops. Insert the filter and wet it abundantly with hot water.
			</StyledTextCard>
			<Button>Add to cart</Button>
		</StyledCoffeeCard>
	)
}
