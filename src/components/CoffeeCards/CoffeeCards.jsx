import React from 'react'
import { Latte } from './Latte'
import { Espresso } from './Espresso'
import { Americano } from './Americano'
import { Cappuccino } from './Cappuccino'
import { StyledCoffeeSection } from './CoffeeCard.styled'

export const CoffeeCards = () => {
  return (
    <StyledCoffeeSection>
      <Espresso />
			<Latte />
			<Americano />
			<Cappuccino />
    </StyledCoffeeSection>
  )
}
