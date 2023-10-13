import React from 'react'
import {
	StyledPromotion,
	StyledImgPromotion,
	StyledTextPromotion,
	StyledTitlePromotion,
	StyledSpanPromotion,
	StyledTextBoxPromotion,
} from './Promotion.styled'
import { Button } from '../Button/Button'

export const Promotion = ({ toggleModal }) => {
	return (
		<StyledPromotion id='Promotion' $reverse>
			<StyledSpanPromotion>Promotion</StyledSpanPromotion>
			<StyledImgPromotion>
				<img src='/public/pictures/paper-cup.svg' />
			</StyledImgPromotion>
			<StyledTextBoxPromotion>
				<StyledTitlePromotion>Coffee of the day</StyledTitlePromotion>
				<StyledTextPromotion>
					Americano coffee (Italian: Caffè Americano) is an espresso diluted with hot water. The presence of foam
					(cream) depends on how coffee and water are mixed. Attention! The concepts of "American" and "American coffee"
					should not be confused. n the second case, this refers not to diluted espresso, but to a drink prepared
					through a filter system.
				</StyledTextPromotion>

				<Button $hideable onClick={toggleModal}>
					Order now
				</Button>
			</StyledTextBoxPromotion>
		</StyledPromotion>
	)
}
