import React from 'react'
import { StyledButtonCard, StyledCoffeeCard, StyledTextCard, StyledTitleCard } from './CoffeeShops.styled'
import { Button } from '../Button/Button'

export const Mocco = () => {
	return (
		<StyledCoffeeCard>
			<StyledTitleCard>Mocco</StyledTitleCard>
			<StyledTextCard>
				Мокко складається з однієї третини еспресо, двох третин свіжого молока. Але є ще маленький секрет: у нього
				входить ще пара інгредієнтів – це додавання шоколаду у вигляді солодкого порошку какао, так само в мокко можна
				додати, для ще більшого смаку, шоколадний сироп. У мокко слід додавати як молочний, так і темний шоколад
			</StyledTextCard>
			<Button>Add to cart</Button>
		</StyledCoffeeCard>
	)
}
