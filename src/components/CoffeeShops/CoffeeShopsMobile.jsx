import React from 'react'
import { coffeeData } from '../../assets/coffeeData'
import { CoffeCard } from './CoffeCard'
import { StyledCardList } from './CoffeeShops.styled'

export const CoffeeShopsMobile = ({ toggleModal }) => {
	return (
		<StyledCardList>
			{coffeeData.map((coffee, id) => (
				<li key={id}>
					<CoffeCard onClick={toggleModal} title={coffee.title} desc={coffee.desc} />
				</li>
			))}
		</StyledCardList>
	)
}
