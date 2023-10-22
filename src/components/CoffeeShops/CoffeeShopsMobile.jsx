import React from 'react'
import { coffeeData } from '../../assets/coffeeData'
import { CoffeCard } from './CoffeCard'
import { StyledCardList } from './CoffeeShops.styled'

export const CoffeeShopsMobile = () => {
	return (
		<StyledCardList>
			{coffeeData.map((coffee, id) => (
				<li key={id}>
					<CoffeCard product={coffee} />
				</li>
			))}
		</StyledCardList>
	)
}
