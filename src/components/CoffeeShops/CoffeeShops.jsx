import React from 'react'
import { Latte } from './Latte'
import { Espresso } from './Espresso'
import { Americano } from './Americano'
import { Cappuccino } from './Cappuccino'
import { StyledCoffeeSection } from './CoffeeShops.styled'

export const CoffeeShops = () => {
  return (
    <StyledCoffeeSection>
      <Espresso />
			<Latte />
			<Americano />
			<Cappuccino />
    </StyledCoffeeSection>
  )
}
